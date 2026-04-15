import "./styles/main.scss"; 

console.log("App started!");

// Active button on price section
document.querySelectorAll('.pricing-option input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelectorAll('.pricing-option').forEach(opt => opt.classList.remove('pricing-option--active'));
    radio.closest('.pricing-option').classList.add('pricing-option--active');
  });
});


// FAQ open question
$(document).ready(function () {

  $('.faq-item__header').on('click', function () {
    const $item = $(this).closest('.faq-item');
    const $body = $item.find('.faq-item__body');
    const $icon = $item.find('.faq-item__icon');
    const isOpen = $item.hasClass('faq-item--open');

    $('.faq-item').removeClass('faq-item--open');
    $('.faq-item__body').slideUp(250);
    $('.faq-item__icon').text('+');

    if (!isOpen) {
      $item.addClass('faq-item--open');
      $body.slideDown(250);
      $icon.text('—');
    }
  });

});


// Burger menu open-close
function closeMenu() {
  $('.burger').removeClass('is-active');
  $('.mobile-menu').removeClass('is-active');
  $('body').removeClass('no-scroll');
}

$('.burger').on('click', function () {
  $(this).toggleClass('is-active');
  $('.mobile-menu').toggleClass('is-active');
  $('body').toggleClass('no-scroll');
});

$('.mobile-menu__close, .mobile-menu__list li').on('click', closeMenu);

// GSAP animation for nice view
  gsap.registerPlugin(ScrollTrigger);

  // Hero
  gsap.from(".hero-text_tag", { opacity: 0, y: -30, duration: 0.7 });
  gsap.from(".hero-text_container", { opacity: 0, y: 30, duration: 0.8, delay: 0.2 });
  gsap.from(".hero-button", { opacity: 0, y: 20, duration: 0.6, delay: 0.5 });
  gsap.from(".hero-img", { opacity: 0, x: 60, duration: 1, delay: 0.3 });

  // Features
  gsap.from(".features__item", {
    scrollTrigger: { trigger: ".features", start: "top 80%" },
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.15  // затримка між кожною карткою
  });

  // About
  gsap.from(".about__text", {
    scrollTrigger: { trigger: ".about", start: "top 75%" },
    opacity: 0, x: -50, duration: 0.8
  });
  gsap.from(".about-img", {
    scrollTrigger: { trigger: ".about", start: "top 75%" },
    opacity: 0, x: 50, duration: 0.8
  });

  // Salary: картки знизу
  gsap.from(".salary__card", {
    scrollTrigger: { trigger: ".salary__grid", start: "top 80%" },
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.2
  });

  // AI Section
  gsap.from(".ai-card", {
    scrollTrigger: { trigger: ".ai-section__grid", start: "top 80%" },
    opacity: 0,
    scale: 0.95,
    duration: 0.7,
    stagger: 0.2
  });

  // Experience
  gsap.from(".experience__video", {
    scrollTrigger: { trigger: ".experience__inner", start: "top 80%" },
    opacity: 0, x: -40, duration: 0.8
  });
  gsap.from(".experience__content", {
    scrollTrigger: { trigger: ".experience__inner", start: "top 80%" },
    opacity: 0, x: 40, duration: 0.8
  });

  // Program
  gsap.from(".program-item", {
    scrollTrigger: { trigger: ".program__layout", start: "top 80%" },
    opacity: 0, y: 30, duration: 0.5, stagger: 0.2
  });
  gsap.from(".program-stat", {
    scrollTrigger: { trigger: ".program__layout", start: "top 80%" },
    opacity: 0, scale: 0.8, duration: 0.6, stagger: 0.2
  });

  // Pricing
  gsap.from(".pricing-card", {
    scrollTrigger: { trigger: ".pricing-section__grid", start: "top 80%" },
    opacity: 0, y: 40, duration: 0.7, stagger: 0.25
  });

  // FAQ
  gsap.from(".faq-item", {
    scrollTrigger: { trigger: ".faq-list", start: "top 85%" },
    opacity: 0, y: 25, duration: 0.5, stagger: 0.15
  });

  // Footer
  gsap.from(".footer__brand, .footer__nav, .footer__contacts", {
    scrollTrigger: { trigger: ".footer__top", start: "top 90%" },
    opacity: 0, y: 30, duration: 0.6, stagger: 0.1
  });