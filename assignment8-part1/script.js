$(function() {
$("button").click(function(event) {
    alert("You clicked the Button!");
});
//
//$("#myButton").bind("click", function(event) {
//   alert("You clicked the Button!");               
//});
//
//$("#myButton").on("click", function(event) {
//   alert("You clicked the Button!");               
//});
//
//$("#myButton, #myButton2").on("click", function(event) {
//   alert("You clicked the Button!");               
//});
//
//$("div:first-child").css().width("400px").height("400px");
//$("div:first-child").on("click, mouseenter, mouseleave", function(event) {
//   alert("You either click the div, entered the div, or left the div!");            
//});
//
//$("div").on({
//    click: function() {$("span").html("You clicked the Div");},
//    mouseenter: function() {$("span").html("You entered the Div");},
//    mouseleave: function() {$("span").html("You left the Div");}
//});
//
//$("a[href*=google]").on("click", function(event) {
//    event.preventDefault();
//    $("a[href*=google]").css("color", "red");
//    $("a[href*=google]").alert(event.currentTarget + "triggered the event!");
//});
//
//$(window).resize(function(){
//    $("div:last-child").text($(window).width().height());
//});
});
