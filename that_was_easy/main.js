function sayThatWasEasy() {
var thatwasEasy = new Audio("that_was_easy.mp3");
thatwasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);