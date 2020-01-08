let redColor = document.querySelector("red");
let blueColor = document.querySelector('blue');
let greenColor = document.querySelector('green');
let color = document.getElementsByClassName("square");

function red() {
    for(var i = 0; i < color.length; i++) {
        color[i].addEventListener("click", function() {this.style.backgroundColor = "red"});
      }
}

  function blue() {
    for(var i = 0; i < color.length; i++) {
        color[i].addEventListener("click", function(){this.style.backgroundColor = "blue"});
      }
}

  function green() {
    for(var i = 0; i < color.length; i++) {
        color[i].addEventListener("click", function() {this.style.backgroundColor = "green"});
      }
}
