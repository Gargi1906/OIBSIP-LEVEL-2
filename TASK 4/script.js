const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => {
    hamburgerBtn.click();
});

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => {
    showPopupBtn.click();
});

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

// Handle login form submission
const loginForm = document.querySelector(".form-box.login form");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();


    // Redirect to the login success page after a successful login
    window.location.href = 'success.html';
});

// Handle sign-in form submission
const signupForm = document.querySelector(".form-box.signup form");
signupForm.addEventListener("submit", (event) => {
    event.preventDefault();


    // Redirect to the sign-in success page after a successful sign-in
    window.location.href = 'signin_success.html';
});
