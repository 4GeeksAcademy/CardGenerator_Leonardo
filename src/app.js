import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let icons = ["♦", "♥", "♠", "♣"];

  let randomNum = numbers[Math.floor(Math.random() * numbers.length)];
  let randomIcon = icons[Math.floor(Math.random() * icons.length)];
  
  let card = document.querySelector("#center");
  let domIconUp = document.querySelector("#swordUp");
  let domIconDown = document.querySelector("#swordDown");

  if(randomIcon === "♥" || randomIcon === "♦") {
    domIconUp.style.color = "red";
    domIconDown.style.color = "red";

  }

  card.innerText = randomNum;
  domIconUp.innerText = randomIcon;
  domIconDown.innerText = randomIcon;

}