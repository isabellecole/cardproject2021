"use strict"

let deck = [];
let colours = ["red","yellow","black"];
let round = 1;
let body = document.getElementById("body");
let button = document.getElementById("button")


// Shuffles the pack
function shuffle(deck){
  for (let i=0; i<deck.length; i++){
    let randint = Math.floor(Math.random()*30);
    let temp = deck[randint];
    deck[randint] = deck[i];
    deck[i] = temp;
  }
  return deck
}

// Generates the deck in order
for (let i=0; i<colours.length; i++){
  for (let j=0; j<10; j++){
    deck.push([colours[i],j+1]);
  }
}

console.log(deck);
shuffle(deck);
console.log(deck);


//cardlist = document.getElementById("cardlist");
//for (let i=0; i<deck.length; i++){
//  cardlist.innerHTML += deck[i][1] + " of " + deck[i][0] + "<br>";
//}

roundBegin1();

function roundBegin1(){
  document.getElementById("round").innerHTML = "Round: " + round + "<br>";
  body.innerHTML = "Player 1, it is your turn. <br>";
  button.innerHTML = "Take a card";
  button.addEventListener("click",roundBegin2);
}

function roundBegin2(){
  body.innerHTML = "Player 2, it is your turn. <br>";
  button.innerHTML = "Take a card";
  button.removeEventListener("click",roundBegin2);
  button.addEventListener("click",showResults);
}

function showResults(){
  button.removeEventListener("click",showResults);
  let cardsPlaying = [];
  cardsPlaying.push(deck.shift());
  cardsPlaying.push(deck.shift());
  body.innerHTML = "Player 1 picked up: " + cardsPlaying[0][1] + " of " + cardsPlaying[0][0] + "<br>" + "Player 2 picked up: " + cardsPlaying[1][1] + " of " + cardsPlaying[1][0] + "<br>";
}
