jQuery(function ($) { 
  var mediaQuery = window.matchMedia('(min-width: 1280px)');
  var visual = document.getElementById('ro-Visual');
  var circle1 = document.getElementById('ro-Circle--1');
  var circle2 = document.getElementById('ro-Circle--2');
  var circle3 = document.getElementById('ro-Circle--3');
  // var parallax = new Parallax(visual);
  // parallax.disable();
  
  // Add a listen event
  mediaQuery.addListener(initParallax);
  
  // Function to do something with the media query
  function initParallax(mediaQuery) {    
    if (mediaQuery.matches && visual) {
      // parallax.enable();
      var parallax = new Parallax(visual);
    } else {
      // parallax.disable();
      var parallax2 = new Parallax(circle1);
      var parallax3 = new Parallax(circle2);
      var parallax4 = new Parallax(circle3);
    }
  }
  
  // On load
  initParallax(mediaQuery);



  
  

  // var clipboard = new Clipboard('.ro-Visual');
  // var header = $('.ro-Hero-header', '.ro-Hero--availability');

  // $('.ro-Visual-contact').hover(
  //   () => header.css('opacity', 0.3),
  //   () => header.css('opacity', 1)
  //   );
});