// banner principal
$(document).ready(function() {
    $('.banner-slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    });

    // Inicializar slick carrousel mmobile
    if ($(window).width() < 768) { // Se activará solo en pantallas con un ancho menor a 768px (versión móvil)
        $('.slider').slick({
            slidesToShow: 1, 
            slidesToScroll: 1, 
            dots: true, 
            arrows: false, 
            centerMode: true, 
            variableWidth: true
        });
    }else {
        $('.slider').css('display', 'none');
    }

    $('.product-slider').slick({
        slidesToShow: 6, 
        slidesToScroll: 1, 
        dots: false, 
        arrows: true, 
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1, 
                    dots: true, 
                    arrows: true 
                }
            }
        ]
    });

    // menu mobie
    $(document).ready(function() {
        const mobileMenuButton = $('.mobile-menu-button');
        const mobileMenuModal = $('.mobile-menu-modal');
        const closeButton = $('.close-button');

        mobileMenuButton.click(function() {
            mobileMenuModal.show();
        });

        closeButton.click(function() {
            mobileMenuModal.hide();
        });
    });

});
