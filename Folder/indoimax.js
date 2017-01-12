$(document).ready(function() {
  
  $(window).scroll(function () {
      //menggunakan console untuk kode
      //.log untuk determine yang kita mau
      //navigasi bar.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 50) {
      $('#navigasi-bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 51) {
      $('#navigasi-bar').removeClass('navbar-fixed');
    }
  });
});