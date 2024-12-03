//Cookies
    //Enviar para cookies
        //Nome Do Usuário
function setCookieName(cname, cvalue){
    document.cookie = cname + "=" + cvalue + ";";
}
function setCookieEmail(cemail, cvalue){
    document.cookie = cemail + "=" + cvalue + ";";
}
function setCookieProduct(cproduct, cvalue){
    document.cookie = cproduct + "=" + cvalue + ";";
}
function setCookieProject(cproject, cvalue){    
    document.cookie = cproject + "=" + cvalue + ";";
}
function setCookieChat(cchat, cvalue){
    document.cookie = cchat + "=" + cvalue + ";";    
}
function setCookieNetwork(crede_social, cvalue){
    document.cookie = crede_social + "=" + cvalue + ";";
}
    //Receber de Cookie
function getCookies(cname, cemail, cproduct, cproject, cchat, crede_social){
    let name = cname + "=";
    let email = cemail + "=";
    let product = cproduct + "=";
    let project = cproject + "=";
    let chat = cchat + "=";
    let rede_social = crede_social + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    let ce = decodedCookie.split(';');
    let cp = decodedCookie.split(';');
    let ct = decodedCookie.split(';');
    let cc = decodedCookie.split(';');
    let cr = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    for(let i = 0; i < ce.length; i++) {
      let c = ce[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(email) == 0) {
        return c.substring(email.length, c.length);
      }
    }
    for(let i = 0; i < cp.length; i++) {
      let c = cp[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(product) == 0) {
        return c.substring(product.length, c.length);
      }
    }
    for(let i = 0; i < ct.length; i++) {
      let c = ct[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(project) == 0) {
        return c.substring(project.length, c.length);
      }
    }
    for(let i = 0; i < cc.length; i++) {
      let c = cc[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(chat) == 0) {
        return c.substring(chat.length, c.length);
      }
    }
    for(let i = 0; i < cr.length; i++) {
      let c = cr[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(rede_social) == 0) {
        return c.substring(rede_social.length, c.length);
      }
    }
    return "";
}

function checkCookie() {
    let user = getCookies("username");
    let email = getCookies("useremail");
    let product = getCookies("buyingproduct");
    let project = getCookies("requestproject");
    let chat = getCookies("talkchat");
    let rede_social = getCookies("network");
    if (user != "") {
      alert("Welcome again " + user + "\n" + email);
    }
  }
//Webservice
    //Atualizar Menu                                
function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0';
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '10px';
    }
}
    //Abrir Menu
function w3_open() {
    var mySidebar = document.getElementById("mySidebar");

    if (mySidebar.style.display == 'block') {
        mySidebar.style.display = 'none';
    }
    else {
        mySidebar.style.display = 'block';
    }
}

    //Fechar Menu
function w3_close() {
    var mySidebar = document.getElementById("mySidebar");
    mySidebar.style.display = "none";
}

    //URL's de Redes Sociais
function social_media(social_media) {
    let src;
    switch (social_media) {
        case 'instagram':
            src = 'https://www.instagram.com/spacedwog/';
            break;

        case 'pinterest':
            src = 'https://br.pinterest.com/spacedwog/';
            break;

        case 'twitter':
            src = 'https://x.com/spacedwog/';
            break;

        case 'linkedin':
            src = 'https://www.linkedin.com/in/spacedwog/';
            break;
    }
    localStorage.setItem("rede_social", src);
    setCookieNetwork("network", social_media);
    window.open(src);
}

//Projetos Concluídos
function projeto(nome_projeto) {
    let src;
    switch (nome_projeto) {
        case 'donna_paris':
            src = 'https://donnaparis.spacedwog.com.br/';
            break;

        case 'criando_sua_raposa':
            src = 'https://spacedwog.itch.io/criando-sua-raposa';
            break;
    }
    localStorage.setItem("projeto", nome_projeto);
    setCookieProject("requestproject", nome_projeto);
    window.open(src);
}

//Compra de Produtos
function efetuar_compra(compra) {
    let src;
    switch (compra) {
        case 'app':
            src = 'https://loja.infinitepay.io/spacedwog/ghp6758-plano-de-desenvolvimento-de-aplicativos';
            break;

        case 'mobile':
            src = 'https://loja.infinitepay.io/spacedwog/ist1936-plano-de-desenvolvimento-de-aplicativos-mo';
            break;

        case 'webapp':
            src = 'https://loja.infinitepay.io/spacedwog/uty6194-plano-de-desenvolvimento-de-aplicativos-we';
            break;
    }
    localStorage.setItem("produto", src);
    setCookieProduct("buyingproduct", compra);
    window.open(src);
}

//Painel para Chat
function chat_painel() {
    localStorage.setItem("chat", "https://wa.me/5511991719629");
    setCookieChat("talkchat", "https://wa.me/5511991719629");
    window.open("https://wa.me/5511991719629");
}

//API
    //GPS
        //Pegar localização
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
        //Exibir localização
function showPosition(position) {
    var latitude = localStorage.setItem("latitude", position.coords.latitude);
    var longitude = localStorage.setItem("longitude", position.coords.longitude);
}
    //Enviar Informações
        //Enviar Email
function send_email() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    let mailto = 'mailto:owner@spacedwog.com.br?subject=' + subject +
        '&body=Nome: ' + name + '\nEmail: ' + email + '\nSolicitou o projeto: ' + message;
    
    setUsuario(name, email);

    if (email != "") {
        window.location.href = mailto;
    }
}

//Encapsulamento
    //SET
function setUsuario(nome, email){
    localStorage.setItem("nome_usuario", nome);
    localStorage.setItem("email_usuario", email);
    setCookieName("username", nome);
    setCookieEmail("useremail", email);
}
    //GET
function getNome(){
    localStorage.getItem("nome_usuario");
}

function getEmail(){
    localStorage.getItem("email_usuario");
}

function getProduto(){
    localStorage.getItem("produto");
}

function getProjeto(){
    localStorage.getItem("projeto");
}

function getChat(){
    localStorage.getItem("chat");
}

function getRede_social(){
    localStorage.getItem("rede_social");
}