function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        setError("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    setLocation(position.coords.latitude, position.coords.longitude);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.error("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.error("An unknown error occurred.");
            break;
    }
}

function setLocation(latitude, longitude) {
    localStorage.setItem("latitude", latitude);
    localStorage.setItem("longitude", longitude);
}

function getLocation() {
    latitude = localStorage.getItem("latitude");
    longitude = localStorage.getItem("longitude");
}

function setError(error) {
    console.error(error);
}