$(document).ready(function () {
    // Sticky navigation
    $(".js--section-features").waypoint(
        function (direction) {
            if (direction == "down") {
                $("nav").addClass("sticky");
            } else {
                $("nav").removeClass("sticky");
            }
        },
        {
            offset: "60px;"
        }
    );

    // Scroll on buttons
    $(".js--scroll-to-plans").click(function () {
        $("html, body").animate({ scrollTop: $(".js--section-plans").offset().top }, 1000);
    });

    $(".js--scroll-to-start").click(function () {
        $("html, body").animate({ scrollTop: $(".js--section-features").offset().top }, 1000);
    });

    // Mobile navigation
    $(".js--nav-icon").click(function () {
        let nav = $(".js--main-nav");
        let icon = $(".js--nav-icon i");

        nav.slideToggle(200);
        if (icon.hasClass("fa-bars")) {
            icon.addClass("fa-times");
            icon.removeClass("fa-bars");
        } else {
            icon.addClass("fa-bars");
            icon.removeClass("fa-times");
        }
    });
});
