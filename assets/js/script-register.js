

$("#inputPassword2").keyup(function(){
    var pw1 = $("#inputPassword1").val().length;
    var pw2 = $("#inputPassword2").val().length;

    if(pw1 != pw2)
    {
       $("#inputPassword2").addClass("form-control2");
    }
    else if (pw2 == pw1)
        $("#inputPassword2").removeClass("form-control2");
});