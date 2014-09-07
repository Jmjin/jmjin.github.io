$(document).ready(function() {
    this.originalWindowHeight = $(window).height();
    this.originalWindowWidth = $(window).width();
    this.originalAboutDescriptionHeight = $("#about .right").height();
    $("#content").css("margin-top",this.originalWindowHeight);

    $(window).resize(function(){
        this.windowHeight = $(window).height();
        $("#content").css("margin-top",this.windowHeight);
    });

    $('.quora-logo').hover(
        function() {
            $('.round-square').css("background-color", "#A6250F");
        },
        function() {
            $('.round-square').css("background-color", "#b9b9b9");
        }
    );

});