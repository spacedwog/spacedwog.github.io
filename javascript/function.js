function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '10px';
    }
}

function social_media(social_media){
  let src;
  switch(social_media){
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
      src = 'https://www.linkedin.com/in/felipersantos1/';
    break;
  }
  window.open(src);
}

function projeto(nome_projeto) {
  let src;
  switch(nome_projeto){
    case 'donna_paris':
      src = 'https://donnaparis.spacedwog.com.br/';
      break;

    case 'criando_sua_raposa':
      src = 'https://spacedwog.itch.io/criando-sua-raposa';
      break;
  }
  window.open(src);
}

function efetuar_compra(compra){
  let src;
  switch(compra){
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
  window.open(src);
}

function chat_painel(){
  window.open("https://wa.me/5511991719629");
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display == 'block') {
    mySidebar.style.display = 'none';
  }
  else {
    mySidebar.style.display = 'block';
  }
}

function send_email(){
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  let mailto =  'mailto:owner@spacedwog.com.br?subject' + subject +
                '&body=Nome: ' + name + '\nEmail: ' + email + '\nSolicitou o projeto ' + message;
                
  window.location.href = mailto;
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
}