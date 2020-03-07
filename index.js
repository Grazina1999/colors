var button = document.querySelector("button");
var colors = [ 'red', 'green', 'blue', 'pink', 'yellow', 'orange',
              '#ff9999', 'white'];
var body = document.querySelector("body");

body.style.backgroundColor = "white";
button.addEventListener("click", changeColor)

function changeColor(){

var i = parseInt(Math.random()*colors.length+1)
body.style.backgroundColor = colors[i];


}