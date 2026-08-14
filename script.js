function openLogin() {
    document.getElementById("auth").style.display = "flex";

    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("signupForm").classList.add("hidden");
}

function openSignup() {
    document.getElementById("auth").style.display = "flex";

    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
}

function showLogin() {
    openLogin();
}

function showSignup() {
    openSignup();
}

function closeAuth() {
    document.getElementById("auth").style.display = "none";
}

function signup() {

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem(
        "shadowEditzUser",
        JSON.stringify(user)
    );

    alert("Account created successfully! 🔥");

    openLogin();
}

function login() {

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const savedUser =
        localStorage.getItem("shadowEditzUser");

    if (!savedUser) {
        alert("Please create a new account first.");
        return;
    }

    const user = JSON.parse(savedUser);

    if (
        email === user.email &&
        password === user.password
    ) {

        closeAuth();

        document.getElementById("userName").textContent =
            user.name;

        document
            .getElementById("dashboard")
            .classList.remove("hidden");

    } else {

        alert("Incorrect email or password.");

    }
}

function logout() {

    document
        .getElementById("dashboard")
        .classList.add("hidden");

}

document
    .getElementById("auth")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeAuth();
        }

    });
