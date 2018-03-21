

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
