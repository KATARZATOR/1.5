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

    breakpoints:{
        220: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
320: {
    slidesPerView: 1.3,
    spaceBetween: 10,
},
380: {
    slidesPerView: 1.5,
    spaceBetween: 10,
},
420:{
    slidesPerView: 1.8,
    spaceBetween: 10,
},
520:{
    slidesPerView: 2.2,
    spaceBetween: 10,
},
580:{
    slidesPerView: 2.3,
    spaceBetween: 10,
},
620:{
    slidesPerView: 2.5,
    spaceBetween: 10,
},
720:{
    spaceBetween: 10,
    slidesPerView: 2.8,
},

    },
    
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    initialSlide:0,
  
  });

