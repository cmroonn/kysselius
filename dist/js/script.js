"use strict";

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".services-decor", {
    scrollTrigger: {
      trigger: ".services-decor",
      scrub: 3
    },
    top: 300,
    ease: "linear",
    duration: 10
  });
  gsap.to(".unique-decor", {
    scrollTrigger: {
      trigger: ".unique-decor",
      scrub: 7,
      end: '+=500'
    },
    top: 300,
    ease: "linear",
    duration: 3
  });
  gsap.to(".contact-decor", {
    scrollTrigger: {
      trigger: ".contact-decor",
      scrub: 5,
      end: 'bottom'
    },
    top: 100,
    ease: "linear",
    duration: 3
  });

  if (window.innerWidth > 992) {// Animation settings
    // const scrollController = new ScrollMagic.Controller();
    //
    // const uniqueScene = new ScrollMagic.Scene({triggerElement: '.unique-decor', duration: 520, offset: -300})
    //     .setPin('.unique-decor')
    //     .addTo(scrollController)
    //
    // const servicesScene = new ScrollMagic.Scene({triggerElement: '.welcome__title', duration: 500, offset: 250})
    //     .setPin('.services-decor')
    //     .addTo(scrollController)
    //
    // const contactScene = new ScrollMagic.Scene({triggerElement: '.unique-decor', duration: 600, offset: 0})
    //     .setPin('.contact-decor')
    //     .addTo(scrollController)
    // const welcomeDot = new ScrollMagic.Scene({triggerElement: '.main'})
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