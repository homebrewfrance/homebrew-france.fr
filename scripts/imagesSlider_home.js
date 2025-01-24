/* © 2024 - Le Homebrew France
Auteur : Dhalian
Fonction : Change de diapositive toutes les huit secondes sur la page d'accueil
*/


const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? 'block' : 'none';
    if (index === slideIndex) {
      slide.classList.add('show');
    } else {
      slide.classList.remove('show');
    }
  });
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

setInterval(nextSlide, 8000);

showSlide(currentSlide);
