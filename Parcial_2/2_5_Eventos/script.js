document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('fotoIA');
  const h1  = document.getElementById('tituloPagina'); // opcional
  if (!img) return;

  const vistas = [
    { src: 'img1.jpg', alt: 'Imagen 1 de IA', title: 'Inteligencia Artificial (IA)' },
    { src: 'img3.jpg', alt: 'Imagen 2 de IA', title: 'Rebelión de las IA' }
  ];

  // Precarga
  vistas.forEach(v => { const i = new Image(); i.src = v.src; });

  // Índice inicial según el src actual del atributo
  let idx = vistas.findIndex(v => v.src === img.getAttribute('src'));
  if (idx === -1) idx = 0;

  // Sincroniza título y (opcional) H1 con la imagen inicial
  document.title = vistas[idx].title;
  if (h1) h1.textContent = vistas[idx].title;

  function toggle() {
    idx = (idx + 1) % vistas.length;

    // Cambia imagen + alt
    img.setAttribute('src', vistas[idx].src);
    img.setAttribute('alt', vistas[idx].alt);

    // Cambia título de la pestaña y (opcional) el H1
    document.title = vistas[idx].title;
    if (h1) h1.textContent = vistas[idx].title;
  }

  img.addEventListener('click', toggle);

  // Accesible por teclado (asegúrate que el <img> tenga tabindex="0")
  img.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
});