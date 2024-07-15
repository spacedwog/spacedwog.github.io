function getItems() {
    fetch('./database/select.php')
      .then(response => response.json())
      .then(data => _displayItems(data))
      .catch(error => console.error('Unable to get items.', error));
}

function tipo_botao(botao){
  
  // Check browser support
  if(typeof(Storage) !== "undefined"){
    // Store
    localStorage.setItem("botao_clicado", botao);
  }
}

function gerar_relatorio(){
  
}