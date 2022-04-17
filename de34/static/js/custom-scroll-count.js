/*==========

Theme Name: DeCore - Architecture & Interior HTML5 Template
Theme Version: 1.0

==========*/


/*==========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Counting JS
==========*/



$(document).ready(function($) {

    // Whole Script Strict Mode Syntax
    "use strict";

    var a = 0;
    var b = 0;
    $(window).on('scroll', function() {
        // Counting JS Start
        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a === 0 && $(window).scrollTop() > oTop) {
            $('.counting').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({ countNum: $this.text() }).animate({
                        countNum: countTo
                    },

                    {
                        duration: 3000,
                        easing: 'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }

                    });

            });
            a = 1;
        }

    });

});