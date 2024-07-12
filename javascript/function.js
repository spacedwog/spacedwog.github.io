function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '10px';
    }
}

function change_article(article){

  let src;

  switch(article){
    case 'gourmet_catering':
      src = 'https://www.w3schools.com/w3images/hamburger.jpg';
    break;

    case 'food_blog':
      src = 'https://www.w3schools.com/w3images/sandwich.jpg';
    break;

    case 'cafe':
      src = 'https://www.w3schools.com/w3images/coffeehouse.jpg';
    break;

    case 'clothing_store':
      src = 'https://www.w3schools.com/w3images/jeans.jpg';
    break;

    case 'interior_design':
      src = 'https://www.w3schools.com/w3images/kitchenconcrete.jpg';
    break;
    
    case 'modal_restaurant':
      src = 'https://www.w3schools.com/w3images/onepage_restaurant.jpg';
    break;
    
    case 'pizza_restaurant':
      src = 'https://www.w3schools.com/w3images/pizza.jpg';
    break;
    
    case 'startup':
      src = 'https://www.w3schools.com/w3images/mac.jpg';
    break;
    
    case 'marketing':
      src = 'https://www.w3schools.com/w3images/coffee.jpg';
    break;
    
    case 'hotel':
      src = 'https://www.w3schools.com/w3images/hotel.jpg';
    break;
    
    case 'travel_agency':
      src = 'https://www.w3schools.com/w3images/beach3.jpg';
    break;
    
    case 'house_design':
      src = 'https://www.w3schools.com/w3images/house1.jpg';
    break;
  }
  const img_article = document.getElementById('article_image');
  img_article.src = src;
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