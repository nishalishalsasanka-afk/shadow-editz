function openLogin() {
    document.getElementById("authModal").style.display = "flex";

    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("signupForm").classList.add("hidden");
}

function openSignup() {
    document.getElementById("authModal").style.display = "flex";

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
    document.getElementById("authModal").style.display = "none";
}


function signup() {

    var name =
        document.getElementById("signupName").value.trim();

    var email =
        document.getElementById("signupEmail").value.trim();

    var password =
        document.getElementById("signupPassword").value;


    if (name === "" || email === "" || password === "") {

        alert("Please fill all fields.");

        return;
    }


    if (password.length < 6) {

        alert("Password must contain at least 6 characters.");

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

    var email =
        document.getElementById("loginEmail").value.trim();

    var password =
        document.getElementById("loginPassword").value;


    var savedUser =
        localStorage.getItem("shadowEditzUser");


    if (savedUser === null) {

        alert("Please create an account first.");

        return;
    }


    var user =
        JSON.parse(savedUser);


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
