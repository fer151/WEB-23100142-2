const img = document.getElementById('FondoIA');


const A = 'img1.jpg';
const B = 'img2.jpg';

[A, B].forEach(src => {
    const preload = new Image();
    preload.src = src;
});

function toggleImage() {
  const isA = img.src.includes(A);
  img.src = isA ? B : A;
  img.alt = isA ? 'Ilustración alternativa de Inteligencia Artificial' : 'Ilustración de Inteligencia Artificial';
}

img.addEventListener('click', toggleImage);

img.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleImage();
  }
});