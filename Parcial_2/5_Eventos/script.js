document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('fotoIA');
  if (!img) return;

  const images = ['img1.jpg', 'img3.jpg'];

  images.forEach(src => { const i = new Image(); i.src = src; });

  let idx = images.indexOf(img.getAttribute('src'));
  if (idx === -1) idx = 0;

  function toggle() {
    idx = (idx + 1) % images.length;
    img.setAttribute('src', images[idx]);
    img.setAttribute('alt', idx === 0 ? 'Imagen 1 de IA' : 'Imagen 2 de IA');
  }

  img.addEventListener('click', toggle);

  // Accesible por teclado
  img.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
});
