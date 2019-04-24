$(document).ready(function () {
    $('.header-slider').slick({
        vertical: true,
        dots: true,
        arrows: false,
        verticalSwiping: true
    });
    $('.caption-slider').slick({
        dots: true,
        arrows: false
        
    })

    menuClick();

});
var menuClick = () =>{
    var navItems = $('.menu-item');

    for (var i = 0; i < navItems.length; i++) {
        navItems[i].onclick = function () {
            for (var k = 0; k < navItems.length; k++) {
                navItems[k].classList.remove('nav-active');
            }
            $(this).toggleClass('nav-active');

        }
    }
};
