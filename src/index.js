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