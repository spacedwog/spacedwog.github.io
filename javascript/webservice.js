function laplace_demon() {
    var webservice = localStorage.getItem("webservice");

    if (webservice = 'on') {
        getLocation();
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latitude = localStorage.setItem("latitude", position.coords.latitude);
    var longitude = localStorage.setItem("longitude", position.coords.longitude);
    alert("Latitude: " + latitude + "\nLongitude: " + longitude);
}