
var numberOfDrum = document.querySelectorAll('.drum').length;

//detecting button press


for (var i = 0; i < numberOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML)
  });

}

//detecting key press

document.addEventListener("keydown", function(){
  makeSound(event.key);
});

//Making sound

function makeSound (key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kickbass = new Audio("sounds/kickbass.mp3");
      kickbass.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom4.mp3");
      tom4.play();
      break;
    case "m":
      var mj3 = new Audio("sounds/mj3.wav");
      mj3.play();
      break;
    case "c":
      var mj3 = new Audio("sounds/mj2.wav");
      mj3.play();
      break;

    default: console.log(buttonInnerHTML);
  }



}
