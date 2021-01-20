$(function() {

    // BURGER MENU

    $('#burger').click(function(event){
        event.preventDefault();
        $('#burger, #nav').toggleClass('active');
        $('body').toggleClass('lock');
    })
});