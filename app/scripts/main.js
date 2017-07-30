function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function ready(fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  var timer, el = $('body'),
      flag = false;

  const overlay = $('.ro-Overlay');
  const listItems = $('.ro-Overlay-list li');

  let timesShown = getRandom(30, 80);
  let current = 0;

  $(window).scroll(function() {
      if (!flag) {
        flag = true;
        el.addClass('is-scrolling');
        
        // if(current === timesShown) {
        //   flag = true;
        //   timesShown = getRandom(30, 80);
        //   current = 0;

        //   let randomLi = getRandom(0, listItems.length - 1);
        //   let item = listItems.eq(randomLi); 

        //   setTimeout(() => {
        //     setTimeout(() => {
        //       overlay.removeClass('is-hidden');
        //       item.addClass('is-visible');
        //     }, 80); // delay before the copy is visible

        //     listItems.removeClass('is-visible');
        //   }, 380); // how long will the copy be visible

        // } else current++;
      }
      clearTimeout(timer);
      timer = setTimeout(function() {
          el.removeClass('is-scrolling');
          flag = false;
          // overlay.addClass('is-hidden')
          // listItems.removeClass('is-visible');
      }, 70);
  });


  // $('.ro-Hero-tagIcon').on('click', e => e.target.classList.add('is-shattered'));

  // const visuals = $('.ro-Visual').get(0);
  // visuals.parallax();

  // var scene = $('ro-Visual').get(0)
// var scene = document.getElementById('ro-Visual');
// var parallax = new Parallax(scene)

  var mediaQuery = window.matchMedia('(min-width: 1280px)');
  var visual = document.getElementById('ro-Visual');
  var circle1 = document.getElementById('ro-Circle--1');
  var circle2 = document.getElementById('ro-Circle--2');
  var circle3 = document.getElementById('ro-Circle--3');

  mediaQuery.addListener(initParallax);
  
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
  
  initParallax(mediaQuery);
});