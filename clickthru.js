      /* <![CDATA[ */

$(function() {

    $('#pause').click(function() {
        $('#slides').cycle('pause');
        return false;
    });

    $('#play').click(function() {
        $('#slides').cycle('resume');
        return false;
    });

    $("#prev").mouseover(
        function() {
            $('#slides').cycle('pause');
            return false;
        }
    );

    $("#prev").mouseout(
        function() {
            $('#slides').cycle('resume');
            return false;
        }
    );

    $("#next").mouseover(
        function() {
            $('#slides').cycle('pause');
            return false;
        }
    );

    $("#next").mouseout(
        function() {
            $('#slides').cycle('resume');
            return false;
        }
    );

    $('#slideshow').hover(

        function() {
            $('#controls').fadeIn();

            var paused = slideshow.is(':paused');
            slideshow.cycle(paused ? 'resume' : 'pause', true);
        },

        function() {
            $('#controls').fadeOut();
        }

    );


    $('#slides').cycle({

        fx: 'fade',

        speed: 1500,

        timeout: 3000,

        next: '#next',

        prev: '#prev',

        pause: true

    });

});





$(document).ready(function() {

    $('#slideshow').fadeIn(1000);

});

/* ]]> */