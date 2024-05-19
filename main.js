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

  $('.carousel').carousel({
    interval: 3000, // Waktu dalam milidetik untuk slide otomatis
    ride: 'carousel'
  });

  function ubahWarna() {
    const slider = document.getElementById('slider');
    const label = document.getElementById('label');
    const cv = document.getElementById('cv');
    
    if (slider.value == 0) {
        label.innerText = 'putih';
        label.style.color = 'white';
        cv.style.color = 'white';
        document.body.style.backgroundColor = 'black';
    } else {
        label.innerText = 'hitam';
        // label.style.color = 'black';
        cv.style.color = 'black';
        document.body.style.backgroundColor = 'white';
    }
}
  

