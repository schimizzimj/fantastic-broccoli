$(document).ready(function() {
  
  var h = $(window).height();

  $(window).scroll(function () { 
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > h) {
      $('.site-header').addClass('navbar-fixed');
    }
    else {
      $('.site-header').removeClass('navbar-fixed');
    }
  });
});
