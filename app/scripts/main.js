jQuery(document).ready(function($) {

  // Initialize parallax on different element regarding the screen size
  const mediaQuery = window.matchMedia('(min-width: 1280px)');
  const visual = document.getElementById('ro-Visual');
  const circle1 = document.getElementById('ro-Circle--1');
  const circle2 = document.getElementById('ro-Circle--2');
  const circle3 = document.getElementById('ro-Circle--3');

  function initParallax(mediaQuery) {    
    if (mediaQuery.matches && visual) {
      let parallax = new Parallax(visual);
    } else {
      let parallax2 = new Parallax(circle1);
      let parallax3 = new Parallax(circle2);
      let parallax4 = new Parallax(circle3);
    }
  }

  initParallax(mediaQuery);
  mediaQuery.addListener(initParallax);


  // Add class to the body on scroll event
  let timer;
  let flag = false;
  let body = document.getElementsByTagName('body')[0];

  $(window).scroll(() => {
    if (!flag) {
      flag = true;
      body.classList.add('is-scrolling');
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      body.classList.remove('is-scrolling');
      flag = false;
    }, 70);

  });
});