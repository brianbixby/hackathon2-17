$(document).ready(function() {
    setTimeout(function() {
      $('#slide-bottom-popup-short').modal('show');
      $('#slide-bottom-popup-tall').modal('show');
    }, 1000);
    var holdingArray = eater38;
    randomDeal();
});
var deck = [];

$(function() {
    $('.col-xs-4').matchHeight();
});

$(".btn").click(function() {
  console.log('hello');
  $("#checkedIn").toggle();
});

function randomDeal() {
    deck = [];
    for (var x=0; x< eater38.length; x++){
      deck.push(eater38[x]);
    }
    for(var i=0; i<9; i++) {
      var randomIndex = Math.floor(Math.random()*9);
      deck.push(array[randomIndex]);
      array.splice(randomIndex, 1);
    }
    console.log("deck: ", deck);
    return deck;
  }


// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
//
// var yyyy = today.getFullYear();
// if(dd<10){
//     dd='0'+dd;
// }
// if(mm<10){
//     mm='0'+mm;
// }
// var today = dd+'/'+mm+'/'+yyyy;
// document.getElementById("DATE").value = today;

  $("#shuffleButton").click(function() {
    randomDeal();
  });
