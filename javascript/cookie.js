// script.js
document.addEventListener("DOMContentLoaded", function () {
    const cookieBar = document.getElementById("cookie-bar");
    const acceptButton = document.getElementById("accept-cookies");

    // Checa se o cookie já foi aceito
    if (localStorage.getItem("cookiesAccepted")) {
        cookieBar.style.display = "none";
    }

    // Ação ao clicar no botão de aceitar
    acceptButton.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBar.style.display = "none";
    console.log("Cookie aceito");
    checkCookie();
    console.log("Cookie checado");
    });
});