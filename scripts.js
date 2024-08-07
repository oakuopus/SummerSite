var scrolled = false;
$(document).ready(function() {
    $(window).scroll(function() {
        $(".summer").css({
            "top": "0"
        })
        if(!scrolled){
            $(".contact").css({
                "animation": "roll 3000ms forwards",
            })
            scrolled = true;
        }
    })
})