const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const cards = document.querySelectorAll('.card');
const cardWidth = 270; // ancho aproximado (card + margin)
const visibleCards = 3;

let index = visibleCards; // empezamos en el primer elemento real
let isTransitioning = false;

// Clonar primera y última parte
const firstClones = [];
const lastClones = [];

for (let i = 0; i < visibleCards; i++) {
  const cloneFirst = cards[i].cloneNode(true);
  const cloneLast = cards[cards.length - 1 - i].cloneNode(true);

  firstClones.push(cloneFirst);
  lastClones.unshift(cloneLast); // mantener el orden
}

lastClones.forEach(clone => carousel.prepend(clone));
firstClones.forEach(clone => carousel.append(clone));

const totalItems = carousel.children.length;

// Posicionar en el primer item real
carousel.style.transform = `translateX(-${index * cardWidth}px)`;

// Función para moverse
function moveCarousel(direction) {
  if (isTransitioning) return;
  isTransitioning = true;

  index += direction;
  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.transform = `translateX(-${index * cardWidth}px)`;

  carousel.addEventListener('transitionend', () => {
    if (index === 0) {
      // Saltamos al final real
      carousel.style.transition = 'none';
      index = cards.length;
      carousel.style.transform = `translateX(-${index * cardWidth}px)`;
    } else if (index === totalItems - visibleCards) {
      // Saltamos al inicio real
      carousel.style.transition = 'none';
      index = visibleCards;
      carousel.style.transform = `translateX(-${index * cardWidth}px)`;
    }
    isTransitioning = false;
  }, { once: true });
}

nextBtn.addEventListener('click', () => moveCarousel(1));
prevBtn.addEventListener('click', () => moveCarousel(-1));
