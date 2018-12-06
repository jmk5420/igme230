'use strict';

$(".menu").click(function () {
    $(".items").slideToggle("fast");
});

let sel = ("article0.txt") // sets default verse element
$('input[article]').val(sel); // changes menu option to default
$("article").load(sel); // retrieves only default element

$("#input[name=article]").change(function () {
    sel = $(this).val();
    $("article").load(sel);
});
