function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward": 
            whatHappens = "You fight the monster";
            break;
        case "back":
            whatHappens = "You retreated";
            break;
        case "right":
            whatHappens = "You flank right";
            break;
        case "left":
            whatHappens = "You flank left";
            break;
        default:
            whatHappens = "Please enter a valid direction";
    }
    return whatHappens;
}

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " +color2.value+")";

    css.textContent = body.style.background + " ";
};


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// color1.addEventListener("input", function(){
//     body.style.background = "linear-gradient(to right, " + color1.value + ", " +color2.value+")";
// });

// color2.addEventListener("input", function(){
//     body.style.background = "linear-gradient(to right, " + color1.value + ", " +color2.value+")";
// });

console.log(this);