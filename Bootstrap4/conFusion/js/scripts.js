
$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 2000});
    $('#carouselButton').click(function() {
        var spanButton = $('#carouselButton').children('span');
        var isPauseButton = spanButton.hasClass('fa-pause');
        if(isPauseButton) {
            $('#mycarousel').carousel('pause');
            spanButton.removeClass('fa-pause');
            spanButton.addClass('fa-play');
        } else {
            $("#mycarousel").carousel('cycle');
            spanButton.removeClass('fa-play');
            spanButton.addClass('fa-pause');
        }
    });
    $('#loginButton').click(function() {
        $('#loginModal').modal('show');
    });
    $('#reserveButton').click(function() {
        $('#reserveModal').modal('show');
    });
});