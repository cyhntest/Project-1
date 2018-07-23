$(document).ready(function () {

    // FOOD IMAGE SIZES
    var foodImageWidth = $('.foodimage').width();
    $('.foodimage').css('height', foodImageWidth);

    // ACCORDION
    $('.collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".card-header").addClass("activeCard")
    })
    $('.collapse').on('hidden.bs.collapse', function(){
        $(this).parent().find(".activeCard").removeClass("activeCard")
    })



    // COPYRIGHT YEAR
    var year = (new Date()).getFullYear()
    $(".copyright span").html(year)
});

window.addEventListener("load", function () {
    $("#preloader").fadeOut();
})