'use strict';

$(".menu").click(function () {
    $(".submenu").slideToggle("fast");
});

$("#story").load("story0.txt");


$("#story").on('change', function () { // first value refers to what is being changes
    console.log(this.value);
    $("story").load(this.value); //this is loading the article based on this.value which is refering to the aricle element
});

console.log(story);

$("#story0.txt").click(function () {
    $("#story").load("story0.txt");
});

$(document).ready(function () {
    $("#story1.txt").click(function () {
        $(this).attr("#story1.txt")
        $("#story").load("story1.txt");
    });
});

$(".submenu #story2.txt").click(function () {
    $(this).attr("#story2.txt")
    $("#story").load("story2.txt");
});

$("#lightpink").click(function () {
    console.log($("#color"));
    $("#source")[0].style.backgroundColor = this.value; // [0] make is so that the value is not confuesed for an array
});

let count = 0;
$("#currentcount").html(count);
$("#increment").click(function () {
    count++; // count = count + 1
    $("#currentcount").html(count);
});
