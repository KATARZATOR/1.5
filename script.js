document.addEventListener('DOMContentLoaded', function () {
    let toggleButton = document.getElementById('toggleButton');
    let brandsList = document.querySelector('.brands-list');

    toggleButton.addEventListener('click', function() {
        if (brandsList.classList.contains('limited-view')) {
            brandsList.classList.remove('limited-view');
            brandsList.classList.add('full-view');
            // toggleButton.textContent = 'Скрыть';
            toggleButton.innerHTML = `<img src="./assets/images/readLess.svg"> Скрыть`; 

        } else {
            brandsList.classList.add('limited-view');
            brandsList.classList.remove('full-view');
            // toggleButton.textContent = 'Показать всё';
            toggleButton.innerHTML = `<img src="./assets/images/readMore.svg"> Показать всё`; 
        }
    });
    brandsList.classList.add('limited-view');
});

const swiper = new Swiper(".mySwiper", {

    slidesPerView: 1.2,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
  });

