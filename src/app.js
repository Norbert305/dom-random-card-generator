/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  project();
};

function project() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];

  let randomNumbers = Math.floor(Math.random() * numbers.length);
  let randomSuits = Math.floor(Math.random() * suits.length);

  let middle = numbers[randomNumbers];
  let suit = suits[randomSuits];

  if (suit == "&hearts;" || suit == "&diams;") {
    document.querySelector(".card").style.color = "red";
  } else {
    document.querySelector(".card").style.color = "black";
  }

  document.querySelector(".top-suit").innerHTML = suit;
  document.querySelector(".number").innerHTML = middle;
  document.querySelector(".bottom-suit").innerHTML = suit;
}
