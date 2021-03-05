"use strict"

let deck = [];
let round = 1;
let colours = ["red","yellow","black"];
let body = document.getElementById("body");
let button = document.getElementById("button");
let cardsPlaying = [];
let p1Cards =[];
let p2Cards = [];
let winner;


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

shuffle(deck);


//cardlist = document.getElementById("cardlist");
//for (let i=0; i<deck.length; i++){
//  cardlist.innerHTML += deck[i][1] + " of " + deck[i][0] + "<br>";
//}

roundBegin1();

// Player 1 "picks up" their card
function roundBegin1(){
  if (round<=15){
    if (round>=2){
      button.removeEventListener("click", roundBegin1);}
    document.getElementById("round").innerHTML = "Round: " + round + "<br>";
    body.innerHTML = "Player 1, it is your turn. <br>";
    button.innerHTML = "Take a card";
    button.addEventListener("click",roundBegin2);}
}

// Player 2 "picks up" their cards
function roundBegin2(){
  body.innerHTML = "Player 2, it is your turn. <br>";
  button.innerHTML = "Take a card";
  button.removeEventListener("click",roundBegin2);
  button.addEventListener("click",showResults);
}

// The players are told which card they picked up
function showResults(){
  cardsPlaying = [];
  cardsPlaying.push(deck.shift());
  cardsPlaying.push(deck.shift());
  body.innerHTML = "Player 1 picked up: " + cardsPlaying[0][1] + " of " + cardsPlaying[0][0] + "<br>" + "Player 2 picked up: " + cardsPlaying[1][1] + " of " + cardsPlaying[1][0] + "<br>";
  button.innerHTML = "Show results";
  button.removeEventListener("click",showResults);
  button.addEventListener("click", revealWinner);
}

// Algorithm to determine who has won. The cards are added to the correct array
function revealWinner(){
  if (cardsPlaying[0][0] == cardsPlaying[1][0] ){ //cards are same colour
    if(cardsPlaying[0][1] > cardsPlaying[1][1]){
      winner = 1;}
    else{ winner=2;}
    body.innerHTML = "Player " + winner + " won because their card is higher.<br>";}

    else { if(cardsPlaying[0][0] == "red"){ //cards are different colours
    if (cardsPlaying[1][0] == "yellow"){winner = 2;}
    else{ winner = 1;}} 
    else{ if(cardsPlaying[0][0] == "yellow"){
      if (cardsPlaying[1][0] == "black"){winner = 2;}
      else {winner = 1;}}
    else{ if(cardsPlaying[0][0] == "black"){
      if (cardsPlaying[1][0] == "red"){winner = 2;}
      else { winner=1;}}
    }}
    body.innerHTML = "Player " + winner + " won due to colour rules. <br>";}

    if (winner==1){ //adds cards to the array
      p1Cards.push(cardsPlaying[0]);
      p1Cards.push(cardsPlaying[1]);
    } else{
      p2Cards.push(cardsPlaying[0]);
      p2Cards.push(cardsPlaying[1]);
    }
    button.innerHTML = "Next round";
    round += 1;
    button.removeEventListener("click", revealWinner);
    button.addEventListener("click",roundBegin1);
}
