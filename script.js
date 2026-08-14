function openLogin() {
    var auth = document.getElementById("auth");
    var login = document.getElementById("loginForm");
    var signup = document.getElementById("signupForm");

    auth.style.display = "flex";
    login.classList.remove("hidden");
    signup.classList.add("hidden");
}

function openSignup() {
    var auth = document.getElementById("auth");
    var login = document.getElementById("loginForm");
    var signup = document.getElementById("signupForm");

    auth.style.display = "flex";
    login.classList.add("hidden");
    signup.classList.remove("hidden");
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

    var name = document.getElementById("signupName").value.trim();
    var email = document.getElementById("signupEmail").value.trim();
    var password = document.getElementById("signupPassword").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    var user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem(
        "shadowEditzUser",
        JSON.stringify(user)
    );

    alert("Account created successfully! 🔥");

    document.getElementById("loginEmail").value = email;
    document.getElementById("loginPassword").value = "";

    openLogin();
}

function login() {

    var email = document.getElementById("loginEmail").value.trim();
    var password = document.getElementById("loginPassword").value;

    var savedUser = localStorage.getItem("shadowEditzUser");

    if (savedUser === null) {
        alert("No account found. Please create an account first.");
        return;
    }

    var user = JSON.parse(savedUser);

    if (email === user.email && password === user.password) {

        closeAuth();

        document.getElementById("userName").textContent = user.name;

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

    alert("Logged out successfully.");

}
