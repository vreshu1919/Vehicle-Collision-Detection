(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

  $('#myButton1').on('click', function(event) {
    event.preventDefault(); // To prevent following the link (optional)
    $(document).ready(function() {
            $.ajax({
                type: 'POST',
                url: '/mail'
            }).done(function (data) {
                console.log(data);
            }).fail(function (xhr,status) {
                console.log('Request Failed');
            });
        });
  });

  $('#myButton2').on('click', function(event) {
    event.preventDefault(); // To prevent following the link (optional)
    $(document).ready(function() {
            $.ajax({
                type: 'POST',
                url: '/mail'
            }).done(function (data) {
                console.log(data);
            }).fail(function (xhr,status) {
                console.log('Request Failed');
            });
        });
  });

  $('#myButton3').on('click', function(event) {
    event.preventDefault(); // To prevent following the link (optional)
    $(document).ready(function() {
            $.ajax({
                type: 'POST',
                url: '/mail'
            }).done(function (data) {
                console.log(data);
            }).fail(function (xhr,status) {
                console.log('Request Failed');
            });
        });
  });

  $('#myButton4').on('click', function(event) {
    event.preventDefault(); // To prevent following the link (optional)
    $(document).ready(function() {
            $.ajax({
                type: 'POST',
                url: '/mail'
            }).done(function (data) {
                console.log(data);
            }).fail(function (xhr,status) {
                console.log('Request Failed');
            });
        });
  });

})(jQuery); // End of use strict
