
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

 $('.login-btn').click(function () {
  $('.user__login').toggleClass('open');
 });



 $('.menu-trigger').click(function () {
  $('.header__nav').addClass('open');
 });
 $(document).mouseup(function (e) {
  if (!$('.header__nav').is(e.target) && $('.header__nav').has(e.target).length === 0) {
   $('.header__nav').removeClass('open');
  }
 });

});

