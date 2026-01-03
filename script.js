console.log("Berkah Tour & Travel ready");

const track = document.getElementById('customSlider');
const next = document.querySelector('.slider-btn.next');
const prev = document.querySelector('.slider-btn.prev');

const cardWidth = 354; // 330 + 24 gap
let index = 0;

const maxIndex = track.children.length - 3; // tampil 3 card

next.addEventListener('click', () => {
  if (index < maxIndex) {
    index++;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
});

prev.addEventListener('click', () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
});
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  const btn = document.getElementById('toggleArtikel');
  const artikel = document.getElementById('artikelContent');

  btn.addEventListener('click', () => {
    const isOpen = artikel.style.display === 'block';

    artikel.style.display = isOpen ? 'none' : 'block';
    btn.textContent = isOpen ? 'Selengkapnya' : 'Tutup';

    if (!isOpen) {
      artikel.scrollIntoView({ behavior: 'smooth' });
    }
  });

  function openModal() {
    document.getElementById('paketModal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('paketModal').style.display = 'none';
  }

  // Klik luar modal = tutup
  document.getElementById('paketModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

  // ===== REVIEW SLIDER =====
  const reviewTrack = document.querySelector('.review-track');
  const reviewNext = document.querySelector('.review-btn.next');
  const reviewPrev = document.querySelector('.review-btn.prev');

  if (reviewTrack && reviewNext && reviewPrev) {
    const cardWidth = 320; // 300 + 20 gap
    let reviewIndex = 0;
    const reviewMaxIndex = reviewTrack.children.length - 1;

    reviewNext.addEventListener('click', () => {
      if (reviewIndex < reviewMaxIndex) {
        reviewIndex++;
        reviewTrack.scrollLeft = reviewIndex * cardWidth;
      }
    });

    reviewPrev.addEventListener('click', () => {
      if (reviewIndex > 0) {
        reviewIndex--;
        reviewTrack.scrollLeft = reviewIndex * cardWidth;
      }
    });
  }