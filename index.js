let cards = [];
colours = ["red","yellow","black"];


// Shuffles the pack
function shuffle(cards){
  for (let i=0; i<cards.length; i++){
    randint = Math.floor(Math.random()*30);
    temp = cards[randint];
    cards[randint] = cards[i];
    cards[i] = temp;
  }
  return cards
}

// Generates the cards in order
for (let i=0; i<colours.length; i++){
  for (let j=0; j<10; j++){
    cards.push([colours[i],j+1]);
  }
}

console.log(cards);
shuffle(cards);
console.log(cards);

