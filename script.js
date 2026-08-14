function openAuth(type) {
    const modal = document.getElementById("authModal");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    modal.style.display = "flex";

    if (type === "signup") {
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
    } else {
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    }
}

function closeAuth() {
    document.getElementById("authModal").style.display = "none";
}

function signup() {
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;

    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    localStorage.setItem(
        "shadowUser",
        JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    );

    alert("Account created successfully! 🔥");

    openAuth("login");
}

function login() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const savedUser = localStorage.getItem("shadowUser");

    if (!savedUser) {
        alert("No account found. Please Sign Up first.");
        return;
    }

    const user = JSON.parse(savedUser);

    if (email === user.email && password === user.password) {
        document.getElementById("authModal").style.display = "none";

        document.getElementById("userName").textContent = user.name;

        document.getElementById("dashboard").classList.remove("hidden");
    } else {
        alert("Incorrect email or password.");
    }
}

function logout() {
    document.getElementById("dashboard").classList.add("hidden");

    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";

    alert("Logged out successfully.");
}

window.addEventListener("click", function(event) {
    const modal = document.getElementById("authModal");

    if (event.target === modal) {
        closeAuth();
    }
});
