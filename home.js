$(document).ready(function () {
  // Smooth scrolling
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    const target = this.hash;
    const $target = $(target);

    $('html, body').stop().animate({
      scrollTop: $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });

  // Module pattern example
  const MyModule = (function () {
    // Private variables and functions
    const privateVar = 'I am private';

    // Public interface
    return {
      getPrivateVar: function () {
        return privateVar;
      }
    };
  })();

  // Usage
  console.log(MyModule.getPrivateVar());

  // Scroll Reveal Animation
  $('.scroll-animated').waypoint(function () {
    $(this.element).addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });

  // Mobile Menu Toggle
  $('.menu-btn').on('click', function () {
    $('.menu').toggleClass('active');
    $(this).find('i').toggleClass('fa-bars fa-times'); // Toggle between hamburger and close icon
  });

  // Owl Carousel Initialization
  $('.carousel').owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      991: {
        items: 3
      }
    }
  });
});