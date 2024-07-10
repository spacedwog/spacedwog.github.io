function load_template(template){
    let src;
    switch(template){
        case 'cafe':
            src = 'https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_cafe';
        break;
    }
    window.open(src);
}

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const image = document.getElementById("scream");

image.addEventListener("load", (e) => {
ctx.drawImage(image, 10, 10);
});