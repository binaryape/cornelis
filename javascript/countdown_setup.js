var clock;

$(document).ready(function () {
    var clock;

    var currentDate = new Date();
    var futureDate = new Date(2015, 5, 12, 14, 10, 0, 0)
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    clock = $('.clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
            stop: function () {
                $('.message').html('The clock has stopped!')
            }
        }
    });

    clock.setCountdown(true);
    clock.start();

});