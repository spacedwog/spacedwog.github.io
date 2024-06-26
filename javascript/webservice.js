function getItems() {
    fetch('./database/select.php')
      .then(response => response.json())
      .then(data => _displayItems(data))
      alert(data)
      .catch(error => console.error('Unable to get items.', error));
}  