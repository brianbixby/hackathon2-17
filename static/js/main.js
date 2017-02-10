$(document).ready(function() {
    setTimeout(function() {
      $('#slide-bottom-popup-short').modal('show');
      $('#slide-bottom-popup-tall').modal('show');
    }, 1000);
});

$(function() {
    $('.col-xs-4').matchHeight();
});

$(".btn").click(function() {
  console.log('hello');
  $("#checkedIn").toggle();
})

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
