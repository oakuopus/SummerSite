var scrolled = false; //set scrolled to false
$(document).ready(function() {
    // ensure window is loaded before running and js
    $(window).scroll(function() {
        $(".summer").css({
            "top": "0" // when windown is scrolled, allow summer logo to move freely
        })
        if(!scrolled){ // if scrolled is stil false, add animation to ball
            $(".contact").css({
                "animation": "roll 3000ms forwards",
            })
            scrolled = true; // set scrolled to true to ensure animation does not retrigger
        }
    })
})