/**
 * Created by RafNeck on 10.05.2016.
 */
$(document).ready(function() {
    var searchInputs = $("#search-form").find("input");
    searchInputs.on("click", function() {
        searchInputs.val('');
    });

    var dragDropRest = $(".reustorants").find(".reustor");
    $(function() {
        dragDropRest.draggable();
    });

    $(function() {
        $('.thumbnail').draggable();
    });

    $(window).scroll(function() {
        var y_scroll_pos = $(window).scrollTop();
        var scroll_pos_test = 350;

        if (y_scroll_pos > scroll_pos_test) {
            $(".fade-circle1").fadeIn(1000);
            $(".fade-circle2").fadeIn(1700);
            $(".fade-circle3").fadeIn(2400);
        }
        else {
            $(".fade-circle1").fadeOut(0);
            $(".fade-circle2").fadeOut(0);
            $(".fade-circle3").fadeOut(0);
        }

    });
});