function makeSound(key) {
    switch (key) {
        case "w":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        default:
    }
}

// Function For Mouse Click
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var indivisualKey = this.innerHTML;

        makeSound(indivisualKey);
        buttonAnimation(indivisualKey);

    });
}

// Function For Keyboard Click
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function buttonAnimation(currentKey){
    var activeClass = document.querySelector("."+ currentKey);

    activeClass.classList.add("pressed");

    setTimeout(function(){
        activeClass.classList.remove("pressed");
    }), 10000;
}