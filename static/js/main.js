$(document).ready(function() {
    setTimeout(function() {
      $('#slide-bottom-popup-short').modal('show');
      $('#slide-bottom-popup-tall').modal('show');
    }, 1000);
    var holdingArray = eater38;
    var deck = [];
    randomDeal(9);
});

$(function() {
    $('.col-xs-4').matchHeight();
});

$(".btn").click(function() {
 $(this).css('background-color', 'green');
});

function randomDeal(dealSize) {
    var temp = [];
    var deck = [];
    for (var x=0; x < eater38.length; x++){
      temp.push(eater38[x]);
    }
    for(var i = 0; i < 9; i++) {
      var randomIndex = Math.floor(Math.random()*temp.length);
      console.log(temp[randomIndex].name)
      deck.push(temp[randomIndex]);
      temp.splice(randomIndex, 1);
    }
    console.log("deck: ", deck);
    return deck;
  }

$("#shuffleButton").click(function() {
  randomDeal();
});
