let count = 0;
const increaseButton = document.getElementById("inc");
const resetButton = document.getElementById("reset");
const decreaseButton = document.getElementById("dec");
const countLabel = document.getElementById("num");

increaseButton.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseButton.onclick = function(){
    count = count - 1;
    countLabel.textContent = count;
}

resetButton.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}