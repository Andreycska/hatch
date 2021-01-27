$(function() {

    let header = $("#header");
    let introH = $("#intro").innerHeight();
    let introW = $("#intro").innerWidth();
    let scrollOffset = $(window).scrollTop();

    // HEADER-FIXED

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });
    
    function checkScroll(scrollOffset) {
        scrollOffset = $(this).scrollTop();
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // BURGER MENU

    $('#burger').click(function(event){
        event.preventDefault();
        let introW = $("#intro").innerWidth();
        if (introW <= 768) {
        $('#burger, #nav').toggleClass('active');
      
        $('body').toggleClass('lock');
        }
    })

    // SMOOTH SCROLL

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let blockId = $(this).data("scroll");
        let blockOffset = $(blockId).offset().top;
        let introW = $("#intro").innerWidth();
        if (introW <= 768) {
        $("#nav").toggleClass("active");
        $("#burger").toggleClass("active");

        $("#nav a").removeClass("active");
        
        $(this).addClass("active");
        $('body').toggleClass('lock');
        }
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    });

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
        let blockId = $(this).data("collapse");
        $(this).toggleClass("active");
        // $(blockId).slideToggle();

    });
});
