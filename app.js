$(document).ready(function(){
    //Change box colors//
    $("#changeBox1").click(function() {
        $("#box1").css("background-color", "blue");
        $("#box1").css("border-color", "orange");
    });
    $("#changeBox2").click(function() {
        $("#box2").css("background-color", "yellow");
        $("#box2").css("border-color", "green");
    });
    $("#changeBox3").click(function() {
        $("#box3").css("background-color", "red");
        $("#box3").css("border-color", "purple");
    });

    //Hide boxes
    $("#hideBox1").click(function(){
    $("#box1").hide();
    });
    $("#hideBox2").click(function(){
        $("#box2").hide();
        });
    $("#hideBox3").click(function(){
            $("#box3").hide();
            });