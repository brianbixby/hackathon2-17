$(document).ready(function() {
    setTimeout(function() {
      $('#slide-bottom-popup-short').modal('show');
      $('#slide-bottom-popup-tall').modal('show');
    }, 1000);
    var holdingArray = eater38;
    randomDeal(holdingArray, 9);
});
var deck = [];

$(function() {
    $('.col-xs-4').matchHeight();
});

$(".btn").click(function() {
  console.log('hello');
  $("#checkedIn").toggle();
});

function randomDeal(array, decksize) {
    for(var i=0; i<decksize; i++) {
      var randomIndex = Math.floor(Math.random()*array.length);
      deck.push(array[randomIndex]);
      array.splice(randomIndex, 1);
    }
    console.log("deck: ", deck);
    return deck;
  }

  $("#shuffleButton").click(function() {
    randomDeal(temp, 9);
  });
