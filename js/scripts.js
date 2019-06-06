$(document).ready(function() {
  console.log("Jquery is loaded");
  $("#submitbtn").click(function(event){
  event.preventDefault()

    var animal = parseInt($('select#animal').val());
    var activity = parseInt($('select#activity').val());
    var food = parseInt($('select#food').val());
    var place = parseInt($('select#place').val());

    var total = animal + activity + food + place;
    if (total <= 7){
      $("#result1").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#result4").hide();
    } else if (total >=8 && total<=10){
      $("#result2").show();
      $("#result1").hide();
      $("#result3").hide();
      $("#result4").hide();
    } else if (total ===11 || total===12){
      $("#result3").show();
      $("#result2").hide();
      $("#result1").hide();
      $("#result4").hide();
    } else {
      $("#result4").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#result1").hide();
    }
});
});
