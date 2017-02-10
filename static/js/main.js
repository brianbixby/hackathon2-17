$(document).ready(function() {
    setTimeout(function() {
      $('#slide-bottom-popup-short').modal('show');
      $('#slide-bottom-popup-tall').modal('show');
    }, 1000);
    var holdingArray = eater38;
    var deck = [];
    function onPL() {
      if(window.location = 'http://localhost:3000') {
        document.getElementById('eat38').addEventListener("click", enterTheMatrix());
      } else {
        randomDeal();
      }
    }
});

$(function() {
    $('.col-xs-4').matchHeight();
});

$(".btn").click(function() {
  $("#checkedIn").toggle();
});

function randomDeal() {
  temp = [];
  for (var x=0; x< eater38.length; x++){
    temp.push(eater38[x]);
  }
  for(var i=0; i<9; i++) {
    var randomIndex = Math.floor(Math.random()*10);
    deck.push(temp[randomIndex]);
    deck.splice(randomIndex, 1);
  }
  console.log("deck: ", deck);
  return deck;
}

$("#shuffleButton").click(function() {
  randomDeal();
});


$(".btn").click(function() {
  console.log('hello');
  $("#checkedIn").toggle();
});

function enterTheMatrix() {
  window.location.replace("http://localhost:3000/matrix");
}
