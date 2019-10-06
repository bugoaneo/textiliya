
$(document).ready(function () {

 $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
  var target = $(this).attr('href'),
   bl_top = $(target).offset().top - 250;
  $('body, html').animate({ scrollTop: bl_top }, 700);
  return false;
 });

 $('.login-btn').click(function () {
  $('.user__login').toggleClass('open');
 });

 $('.close').click(function () {
  $('.user__login').removeClass('open');
 });

 //dropdown__text

});

