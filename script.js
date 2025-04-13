const banners = document.querySelectorAll('.banner');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let current = 0;

function showBanner(index) {
  banners.forEach((banner, i) => {
    banner.classList.toggle('active', i === index);
  });
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % banners.length;
  showBanner(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + banners.length) % banners.length;
  showBanner(current);
});
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav-menu').classList.toggle('show');
});
