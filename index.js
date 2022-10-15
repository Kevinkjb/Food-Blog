$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $(".topbar").css({"opacity" : ".6"});
        }
        else{
            $(".topbar").css({"opacity" : "1"});
        }
    });
});

