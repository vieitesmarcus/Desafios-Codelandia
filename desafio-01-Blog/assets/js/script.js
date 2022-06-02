$(document).ready(function() {
    $('.heart').on({
        'click': function() {
            let src = ($(this).attr('src') === 'assets/img/heart.png') ?
            'assets/img/heart-full.png' :
            'assets/img/heart.png';
            $(this).attr('src', src);
        }
    });
});