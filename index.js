var blueBtn = document.getElementById("blue")
var redBtn = document.getElementById("red")
var yellowBtn = document.getElementById("yellow")
var greenBtn = document.getElementById("green")

blue.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue"
})

red.addEventListener("click", function() {
    document.body.style.backgroundColor = "red"
})

yellow.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow"
})

green.addEventListener("click", function() {
    document.body.style.backgroundColor = "green"
})

orange.addEventListener("click", function() {
    document.body.style.backgroundColor = "orange"
})


document.addEventListener('keydown', function (event) {
    if (event.key === 'r') {
      document.body.style = "background-color: red";
    }
    if (event.key === 'g') {
      document.body.style = "background-color: green";
    }
    if (event.key === 'b') {
      document.body.style = "background-color: blue";
    }
    if (event.key === 'o') {
      document.body.style = "background-color: orange";
    }
    if (event.key === 'y') {
      document.body.style = "background-color: yellow";
    }  
  });
