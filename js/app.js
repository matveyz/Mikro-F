$(document).ready(function() {
    jQuery('.imgg, .imgg2, .imgg3, .imgg4').hover(
        function() {
            $(this).find(".textt").stop().fadeIn();
        },
        function() {
            $(this).find(".textt").stop().fadeOut();
        }
    );
});
$(function() {
    $('.right-arrow').click(function() {
        $("#fdb").fadeOut(1000).attr('src', "img/feedback.png").fadeIn(1000).attr('src', "img/feedback.png");
        return false;
    });
});
$(function() {
    $('.left-arrow').click(function() {
        $("#fdb").fadeOut(1000).attr('src', "img/feedback.png").fadeIn(1000).attr('src', "img/feedback.png");
        return false;
    });
});
