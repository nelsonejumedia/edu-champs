function darkTheme() {
    $("#style").attr("href", "css/darktheme.css");
    $(".contact-logo").attr("src", "images/logo.png");
    $(window).scroll(function() {
        let pos = $(window).scrollTop();
        if(pos >= 100){
            $(".navbar").css("background-color", "#161511");
            $(".nav-link").css("color", "#f8f6e1");
            $(".logo").attr("src", "images/logo.png");
        } else {
            $(".navbar").css("background-color", "transparent");
            $(".logo").attr("src", "images/logo.png");
        }
    });
   }
   
   function lightTheme() {
    $("#style").attr("href", "css/lighttheme.css");
   }
   
   function goldTheme() {
    $("#style").attr("href", "css/goldtheme.css");
   }
   

$(document).ready(function(){

// Navbar toggle
$('#navbar-toggler').click(function() {
    $('.navbar-collapse').slideToggle(400);
});

// Navbar bg transform while body is on scroll
$(window).scroll(function() {
    let pos = $(window).scrollTop();
    if(pos >= 100){
        $('.navbar').addClass('cng-navbar');
        $(".logo").attr("src", "images/logo-black.png");
    } else {
        $('.navbar').removeClass('cng-navbar');
        $(".logo").attr("src", "images/logo.png");
    }
});

// Video popup
$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});

// Team carousel
$('.team .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 3
        }
    }
});

// FAQ Accordion
$('.faq-head').each(function(){
    $(this).click(function(){
        $(this).next().toggleClass('show-faq-content');
        let icon = $(this).children('span').children("i").attr('class');

        if(icon == "fas fa-plus"){
            $(this).children('span').html('<i class="fas fa-minus"></i>');
        } else {
            $(this).children('span').html('<i class="fas fa-plus"></i>')
        }
    });
});

// Testimonial Carousel
$('.testimonial .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    nav: false,
    items: 1
});
});