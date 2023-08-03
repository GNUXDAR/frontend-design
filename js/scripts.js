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
});



// Inicializar Slick Carousel mobvile
$(document).ready(function() {
    if ($(window).width() < 768) { // Se activará solo en pantallas con un ancho menor a 768px (versión móvil)
        $('.slider').slick({
            slidesToShow: 1, // Muestra 1 slide a la vez
            slidesToScroll: 1, // Desplaza 1 slide a la vez
            dots: true, // Muestra los puntos de paginación (opcional)
            arrows: false, // Oculta las flechas de navegación (opcional)
            centerMode: true, // Centra el slide activo
            variableWidth: true // Permite que los slides tengan ancho variable
        });
    }else {
        $('.slider').css('display', 'none');
    }
});


$(document).ready(function() {
    $(".product-slider").slick({
        slidesToShow: 6, // Muestra 6 productos en la versión de escritorio
        slidesToScroll: 1, // Desplaza 1 producto a la vez
        dots: false, // Muestra los puntos de paginación (opcional)
        arrows: true, // Muestra las flechas de navegación (opcional)
        responsive: [
            {
                breakpoint: 768, // Punto de quiebre para la versión móvil
                settings: {
                    slidesToShow: 1, // Muestra 1 producto en la versión móvil
                    slidesToScroll: 1, // Desplaza 1 producto a la vez
                    dots: true, // Muestra los puntos de paginación (opcional)
                    arrows: true // Muestra las flechas de navegación (opcional)
                }
            }
        ]
    });
});

// menu mobile

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const mobileMenuModal = document.querySelector(".mobile-menu-modal");
    const closeButton = document.querySelector(".close-button");

    mobileMenuButton.addEventListener("click", function () {
        mobileMenuModal.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        mobileMenuModal.style.display = "none";
    });
});

