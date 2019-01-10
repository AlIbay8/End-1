$("button").click(function() {
    $(".1").delay(2000).fadeIn(3000);
    $(".2").delay(6000).fadeIn(3000);
    $(".3").delay(12000).fadeIn(3000);
    $(".4").delay(18000).fadeIn(3000);
    $(".5").delay(24000).fadeIn(3000);
    $(".kill").delay(25000).fadeIn(3000);
});

$(".kill").click(function() {
    $("html").delay(2000).hide();
});
