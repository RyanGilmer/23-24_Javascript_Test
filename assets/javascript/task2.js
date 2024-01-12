/* Put code for the task below */
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");


red.addEventListener("click", changeBG);
blue.addEventListener("click", changeBG);
green.addEventListener("click" , changeBG);



function changeBG(){
    event.target.style.backgroundColor = "red";
}
