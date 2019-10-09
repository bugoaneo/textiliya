
$(document).ready(function () {

 $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
  var target = $(this).attr('href'),
   bl_top = $(target).offset().top - 250;
  $('body, html').animate({ scrollTop: bl_top }, 700);
  return false;
 });


 $('.search__open-btn').click(function () {
  $('.search__wrap').toggleClass('open');
 });

 /*login popup behavior*/

 $('.login-btn').click(function () {
  $('.user__login').addClass('open');
 });
 $('.close').click(function () {
  $('.user__login').removeClass('open');
 });



 /*menu behavior on mobile breakpoint */

 $('.menu-trigger').click(function () {
  $('.header__nav').addClass('open');
 });
 $(document).mouseup(function (e) {
  if (!$('.header__nav').is(e.target) && $('.header__nav').has(e.target).length === 0) {
   $('.header__nav').removeClass('open');
  }
 });

});


$(window).resize(function () {
 if ($(window).width() < 720) {
  $('.footer__title').click(function () {
   $(this).next('.footer__list').toggleClass('open');
  });

 
 };
});
 $('.dropdown__trigger').click(function () {
   $(this).next('.dropdown__wrap').toggleClass('open');
  });

$(window).scroll(function () {
 if ($(window).width() > 720) {
  if ($(window).scrollTop() >= 115) {
   $('.header__nav').addClass('fixed');
   $('.main').addClass('fixed');
  }
  else {
   $('.header__nav').removeClass('fixed');
   $('.main').removeClass('fixed');
  }
 };
});

