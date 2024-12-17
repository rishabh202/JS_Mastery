"use strict"
// little demo project

const mainButton = document.querySelector("button");
const currentColor = document.querySelector(".current-color")
console.log(currentColor);
function randomColorGenerator(){
  const red = Math.floor(Math.random()*256)
  const green = Math.floor(Math.random()*256)
  const blue = Math.floor(Math.random()*256)
  const randomColor = `rgb(${red}, ${green}, ${blue})`
  return randomColor;
};
const body = document.body // to change the background
mainButton.addEventListener("click", ()=>{
    const randomColor = randomColorGenerator();
   body.style.backgroundColor = randomColor;
   currentColor.textContent = randomColor
})

// see rgb me teeno ki value 0 se leke 255 tak jati hai
// and we also have Math.random() function
// we know Math.random() gives us random number from between 0 to 1; excluding 1
// so likewise if we want random number between 1 to 10; (ten exclucing obv) we can do Math.random() * 10
// and for our case (rgb k lie) we want only integer values. so we can do like:
// Math.floor(Math.random() * 10)
// The above statement will give random number between 1 to 9
// so obv for our case we will write
// Math.floor(Math.random() * 256)


