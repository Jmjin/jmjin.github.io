$(document).ready(function() {

    var that = this;
    this.originalWindowHeight = $(window).height();
    this.originalWindowWidth = $(window).width();
    this.originalAboutDescriptionHeight = $("#about .right").height();
    $("#content").css("margin-top",this.originalWindowHeight);

    $(window).resize(function(){
        this.windowHeight = $(window).height();
        $("#content").css("margin-top",this.windowHeight);

        // this.windowWidth = $(window).width();
        // this.difference = that.originalWindowWidth - this.windowWidth;

        // if(this.difference > 0) {
        //     $("#about .right").css("height",that.originalAboutDescriptionHeight+this.difference/2.7);
        // }
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