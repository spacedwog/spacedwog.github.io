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
      src = 'https://x.com/spacedwog';
    break;

    case 'linkedin':
      src = 'https://www.linkedin.com/in/felipersantos1/';
    break;
  }
  window.open(src);
}