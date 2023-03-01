//////////////
/// Javascript for Posts page
///////
$(function() {
    // Executed when Js-menu-icon js clicked
    $('.js-menu-icon').click(function() {
        $(this).next().toggle();
    })
})