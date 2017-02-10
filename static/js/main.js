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

$.ajax({
      url:"https://www.reddit.com/search.json?q=" + photoSearch + "+nsfw:no",
      method: "GET",
      success: function(response) {
        console.log(response);
        // hide search form & show stop button
        toggleButtons();

        var photos = [];
        var photo = response.data.children;
        photo.forEach(function(pic){
          if (pic.data.preview)
          photos.push(pic.data.preview.images[0].source.url);
        })

        var counter = 0;
        setInterval(function(){
            $("#results").html("");
            console.log("<img src=" + photos[counter] + ">");
            $("#results").append("<img src=" + photos[counter] + ">");
            counter++
            if (counter > 13) {
              counter = 0
            };
        },3000)
      },
      error: function(response) {
        console.log(response);
      }
    })
