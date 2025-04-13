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

const toggleButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = navMenu.querySelectorAll('a');

// Abrir/fechar menu
toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Fechar menu ao clicar em qualquer link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

// Função para redirecionar para o WhatsApp com mensagem personalizada
const botaoComprar = document.querySelectorAll('.btn');

botaoComprar.forEach(botao => {
  botao.addEventListener('click', function () {
    const produto = this.parentElement.querySelector('h3').textContent;
    const numero = '5521964269909';
    const mensagem = encodeURIComponent(`Olá! Tenho interesse no produto: ${produto}`);
    const link = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(link, '_blank');
  });
});
