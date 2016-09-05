$(document).ready(function() {


$(".answers").hide();
$("h2").click(function(){
$(this).next(".answers").slideToggle(500);
});

  $(".tabsMenu a").click(function(event) {
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");
    var tab = $(this).attr("href");
    $(".tabContent").css("display", "none");
    $(tab).fadeIn();
  });

  $('.fancybox').fancybox();

}); // end JQ

function submitfunc() {
  var x = document.forms["form2"]["name"].value;
  var y = document.forms["form2"]["email"].value;
  var z = document.forms["form2"]["text"].value;
  if (x === null || x == " " || y === null || y == " " || z === null || z == " ") {
    alert("You need to enter your name, email address and message");
  }
}

function submitfunc2() {
  var x = document.forms["form3"]["name"].value;
  var z = document.forms["form3"]["text"].value;
  if (x === null || x == " " || z === null || z == " ") {
    alert("You need to enter your name and message");
    return false;
  }
}