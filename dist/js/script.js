"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Animation settings
  var scrollController = new ScrollMagic.Controller();
  var uniqueScene = new ScrollMagic.Scene({
    triggerElement: '.unique-decor',
    duration: 250
  }).setPin('.unique-decor').addTo(scrollController);
  var servicesScene = new ScrollMagic.Scene({
    triggerElement: '#decor-trigger',
    duration: 250
  }).setPin('.services-decor').addTo(scrollController);
  var contactScene = new ScrollMagic.Scene({
    triggerElement: '.contact',
    duration: 350,
    offset: 0
  }).setPin('.contact-decor').addTo(scrollController);
  var welcomeDot = new ScrollMagic.Scene({
    triggerElement: '.main'
  }).setVelocity('#title_dot', {
    rotate: "360deg"
  }, {
    duration: 1000,
    easing: 'linear'
  }).addTo(scrollController); // scroll to bottom

  var btn = document.getElementById('toBottomBtn');
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    var bottom = document.getElementById('contact-block');
    bottom.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    });
  });
});