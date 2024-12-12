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
    window.open(src);
}

//Painel para Chat
function chat_painel() {
    localStorage.setItem("chat", "https://wa.me/5511991719629");
    window.open("https://wa.me/5511991719629");
}

//API
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
    setCookie("username", name);

    if (email != "") {
        window.location.href = mailto;
    }
}

//Encapsulamento
    //SET
function setUsuario(nome, email){
    localStorage.setItem("nome_usuario", nome);
    localStorage.setItem("email_usuario", email);
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