// script.js
document.addEventListener("DOMContentLoaded", function () {
    const cookieBar = document.getElementById("cookie-bar");
    const acceptButton = document.getElementById("accept-cookies");

    // Checa se o cookie já foi aceito
    if (localStorage.getItem("cookiesAccepted")) {
        cookieBar.style.display = "display";
    }
    // Ação ao clicar no botão de aceitar
    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBar.style.display = "none";
    });
});

function setCookie(cname, cvalue){
    document.cookie = cname + "=" + cvalue + ";";
}
//Receber de Cookie
function getCookie(cname){
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
        
function checkCookie() {
    let user = getCookies("username");
    if (user != "") {
        alert("Welcome again User: " + user);
    }
}