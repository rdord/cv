function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

jQuery(function($) {

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


  $('.ro-Hero-tagIcon').on('click', e => e.target.classList.add('is-shattered'));

  // const visuals = $('.ro-Visual').get(0);
  // visuals.parallax();

  // var scene = $('ro-Visual').get(0)
var scene = document.getElementById('ro-Visual');
var parallax = new Parallax(scene)

});