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
        document.cookie = `authToken=abcd1234; path=/; secure; HttpOnly`;
        document.cookie = `cookiesAccepted=true; path=/; max-age=31536000`; // Expira em 1 ano
    });
});

function setCookie(cname, cvalue){
    document.cookie = cname + "=" + cvalue + ";";
}
//Receber de Cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');
    const prefix = `${name}=`;
    for (const cookie of cookies) {
        let trimmedCookie = cookie.trim(); // Remove espaços em branco no início e no final
        if (trimmedCookie.startsWith(prefix)) {
            return trimmedCookie.substring(prefix.length); // Retorna o valor do cookie
        }
    }
    return null; // Retorna null se o cookie não for encontrado
}

function checkCookie() {
    let user = getCookies("username");
    if (user != "") {
        alert("Welcome again User: " + user);
    }
}