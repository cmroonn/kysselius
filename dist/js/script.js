"use strict";

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 992) {
    // Animation settings
    var scrollController = new ScrollMagic.Controller();
    var uniqueScene = new ScrollMagic.Scene({
      triggerElement: '.unique-decor',
      duration: 520,
      offset: -300
    }).setPin('.unique-decor').addTo(scrollController);
    var servicesScene = new ScrollMagic.Scene({
      triggerElement: '.welcome__title',
      duration: 500,
      offset: 250
    }).setPin('.services-decor').addTo(scrollController);
    var contactScene = new ScrollMagic.Scene({
      triggerElement: '.unique-decor',
      duration: 600,
      offset: 0
    }).setPin('.contact-decor').addTo(scrollController); // const welcomeDot = new ScrollMagic.Scene({triggerElement: '.main'})
    //     .setVelocity('#title_dot', {rotate: "360deg"}, {duration: 1000, easing: 'linear'})
    //     .addTo(scrollController);
  } // scroll to bottom


  function scrollToBottom(e) {
    e.preventDefault();
    var bottom = document.getElementById('contact-block');
    bottom.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    });
  }

  var scrollingBtns = document.querySelectorAll('.scroll-to-bottom');
  scrollingBtns.forEach(function (elem) {
    return elem.addEventListener('click', scrollToBottom);
  });
});