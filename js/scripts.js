$(document).ready(function(){
  $("#choose").click(function(){
    var vacation = parseInt($("#answer1").val()) + parseInt($("#answer2").val()) + parseInt($("#answer3").val()) + parseInt($("#answer4").val()) + parseInt($("#answer5").val()) + parseInt($("#answer6").val());
    var beach = $("input:radio[name=beach]:checked").val();

    if (beach === "tropical"){
      $("#costarica").toggle();
      $("#iceland #pei #dubai").hide();
    } else if (vacation <=3){
      $("#iceland").toggle();
      $("#pei #costarica #dubai").hide();
    } else if (3 < vacation && vacation <= 9){
      $("#pei").toggle();
      $("#iceland #costarica #dubai").hide();
    } else if (9 < vacation && vacation <= 15){
      $("#costarica").toggle();
      $("#iceland #pei #dubai").hide();
    } else if (15 < vacation && vacation <= 18){
      $("#dubai").toggle();
      $("#iceland #costarica #pei").hide();
    } else if (vacation >=100){
      alert("Please answer all questions.")
    }else {
      console.log("broken");
    };


  });
});
