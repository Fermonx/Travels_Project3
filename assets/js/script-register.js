

$("#inputPassword2").keyup(function(){
    var pw1 = $("#inputPassword1").val().length;
    var pw2 = $("#inputPassword2").val().length;
    var pw11 = $("#inputPassword1").val();
    var pw22 = $("#inputPassword2").val();

    if((pw1 !== pw2)&&(pw11 !== pw22))
    {
       $("#inputPassword2").addClass("form-control2");
    }
    else if ((pw2 === pw1)&&(pw22 === pw11))
        $("#inputPassword2").removeClass("form-control2");
});

$(function()
{
    $('#checkb').click(function()
    {
        if($(this).is(':checked'))
            ($("#regbutton")).removeClass('disabled');
        else
            ($("#regbutton")).addClass('disabled');
    });
});

var pressed = true;
$("#menu-toggler").click(function () {
    var altura = $(window).scrollTop();

    if (altura === 0) {
        if ($("#menu-toggler").attr("aria-expanded")==="false") {
            pressed = false;
            $('nav').addClass('nav-scroll');
            $('#main-menu').addClass('menu-scroll');
        } else {
            pressed = true;
            $('nav').removeClass('nav-scroll');
            $('#main-menu').removeClass('menu-scroll');
        }
    }
});
$(window).on('scroll', function () {
    if($(window).scrollTop()) {
        $('nav').addClass('nav-scroll');
        $('#main-menu').addClass('menu-scroll');
    } else {
        if ($("#menu-toggler").attr("aria-expanded")==="false") {
            $('nav').removeClass('nav-scroll');
            $('#main-menu').removeClass('menu-scroll');
        };
    };
});

$(window).on('scroll', function () {
    if($(window).scrollTop()===0 && $("#menu-toggler").attr("aria-expanded")===true) {
        $('nav').removeClass('nav-scroll');
        $('#main-menu').addClass('menu-scroll');
    };
});