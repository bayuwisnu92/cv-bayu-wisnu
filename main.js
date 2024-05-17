$(document).ready(function(){
  // Tambahkan smooth scrolling ke semua tautan dalam navbar
  $(".navbar a").on('click', function(event) {
    // Pastikan this.hash memiliki nilai sebelum menangani navigasi
    if (this.hash !== "") {
      // Mencegah tindakan default tautan
      event.preventDefault();

      // Mengambil hash (#) dari tautan yang diklik
      var hash = this.hash;

      // Menggunakan metode animate() jQuery untuk menambahkan smooth page scroll
      // Durasi animasi adalah 800 milidetik
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Tambahkan hash (#) ke URL setelah selesai menggulir (default klik)
        window.location.hash = hash;
      });
    } // Akhir if
  });
});

  // Fungsi untuk menambah atau menghapus kelas 'sticky' pada navbar
  function toggleStickyNavbar() {
    var lastScrollTop = 0;
    $(window).scroll(function() {
      var currentScroll = $(this).scrollTop();
      if (currentScroll > lastScrollTop) {
        // Scroll ke bawah
        $('.navbar').removeClass('sticky');
      } else {
        // Scroll ke atas
        $('.navbar').addClass('sticky');
      }
      lastScrollTop = currentScroll;
    });
  }

  // Panggil fungsi saat dokumen siap
  $(document).ready(function() {
    toggleStickyNavbar();
  });

