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
        label.innerText = 'malam';
        label.style.color = 'white';
        cv.style.color = 'white';
        document.body.style.backgroundColor = 'black';
    } else {
        label.innerText = 'siang';
        label.style.color = 'black';
        cv.style.color = 'black';
        document.body.style.backgroundColor = 'white';  
    }
}

function addHoverEffect(elementId, hoverText, defaultText) {
  let element = document.getElementById(elementId);

  element.addEventListener('mouseover', function() {
    element.innerHTML = hoverText;
  });

  element.addEventListener('mouseout', function() {
    element.innerHTML = defaultText;
  });
}

// Apply hover effect to the elements
addHoverEffect('git', 'pergi ke halaman github?', 'https://github.com/bayuwisnu92');
addHoverEffect('kon', 'hubungi saya ke whatApp?', '083806620512');
addHoverEffect('ala', 'Jl. Liogenteng no 71/94b Astanaanyar <br> Rt.005 Rw005 keluaran nyengseret kecamatan astanaanyar', 'Jl. Liogenteng no 71/94b Astanaanyar');
addHoverEffect('porto', 'ke halaman portofolio ?', 'portofolio');
addHoverEffect('more', 'masuk', 'more info');

  

