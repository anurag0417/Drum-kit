var numButton = document.querySelectorAll(".drum").length;

for(var i=0;i<numButton;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var pressButton = this.innerHTML;
    makeSound(pressButton);
    addAnimation(pressButton);
  });
}
// $(".drum").click(function(){
//   $("h1").css("color","purple");
// })
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  addAnimation(event.key);
})

function makeSound(key){
  switch (key) {
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "j":
      var kick = new Audio("sounds/crash.mp3");
      kick.play();
      break;
    case "k":
      var kick = new Audio("sounds/snare.mp3");
      kick.play();
      break;
    case "w":
      var kick = new Audio("sounds/tom-1.mp3");
      kick.play();
      break;
    case "a":
      var kick = new Audio("sounds/tom-2.mp3");
      kick.play();
      break;
    case "s":
      var kick = new Audio("sounds/tom-3.mp3");
      kick.play();
      break;
    case "d":
      var kick = new Audio("sounds/tom-4.mp3");
      kick.play();
      break;

    default:

  }
}

function addAnimation(key){
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },10);
}
