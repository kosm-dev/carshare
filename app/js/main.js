$(function () {

  $('.burger').click(function (event) {
    $('.header__menu').toggleClass('header__menu--active');
    $('.burger').toggleClass('burger--active');
    $('body').toggleClass('lock');
  });
});



