
// Ваш скрипт для Swiper
(function() {
  document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true
    });
  });
})();

// Мой скрипт для модального окна
(function() {
  const button = document.getElementById('myButton');
  const modal = document.getElementById('myModal');
  const closeBtn = document.querySelector('.close');

  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  button.addEventListener('click', () => {
    if (isMobileDevice()) {
      window.location.href = 'booking.html';
    } else {
      modal.style.display = 'block';
    }
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
})();

// функция для отзывов 
(function() {
  


  }
)
