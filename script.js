// BANNERS
const banners = document.querySelectorAll('.banner');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let current = 0;

function showBanner(index) {
  banners.forEach((banner, i) => {
    banner.classList.toggle('active', i === index);
  });
  updateDots(); // Atualiza os dots sempre que o banner muda
}

if (nextBtn && prevBtn && banners.length > 0) {
  nextBtn.addEventListener('click', () => {
    current = (current + 1) % banners.length;
    showBanner(current);
  });

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + banners.length) % banners.length;
    showBanner(current);
  });
}

// MENU SANDUÍCHE
const toggleButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (toggleButton && navMenu) {
  const navLinks = navMenu.querySelectorAll('a');

  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });
}

// DOTS DO BANNER
const dots = document.querySelectorAll('.dot');
dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    current = parseInt(e.target.dataset.index); // Certifique-se de converter para número
    showBanner(current); // Exibe o banner selecionado
  });
});

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active')); // Remove a classe 'active' de todos os dots
  dots[current].classList.add('active'); // Adiciona a classe 'active' ao dot correspondente
}

// WHATSAPP
const botaoComprar = document.querySelectorAll('.btn');

if (botaoComprar.length > 0) {
  botaoComprar.forEach(botao => {
    botao.addEventListener('click', function () {
      const produto = this.parentElement.querySelector('h3');
      if (!produto) return;
      const nomeProduto = produto.textContent;
      const numero = '5521964269909';
      const mensagem = encodeURIComponent(`Olá! Tenho interesse no produto: ${nomeProduto}`);
      const link = `https://wa.me/${numero}?text=${mensagem}`;
      window.open(link, '_blank');
    });
  });
}

// FAIXA DE AVISO
const mensagens = [
  "25% OFF na segunda peça — aproveite agora!",
  "Frete grátis acima de R$199",
  "Compre 2 e ganhe 1 brinde exclusivo!",
  "Descontos especiais só hoje!"
];

let index = 0;
const banner = document.getElementById("topBanner");

if (banner) {
  banner.textContent = mensagens[index]; // exibe a primeira imediatamente
  setInterval(() => {
    index = (index + 1) % mensagens.length;
    banner.textContent = mensagens[index];
  }, 5000);
}
