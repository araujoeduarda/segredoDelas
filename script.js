// === BANNER PRINCIPAL COM SETAS ===
const banners = document.querySelectorAll('.banner');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let current = 0;

function showBanner(index) {
  banners.forEach((banner, i) => {
    banner.classList.toggle('active', i === index);
  });
  updateDots();
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

// === MENU SANDUÍCHE ===
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

// === BANNER COM DOTS ===
const dots = document.querySelectorAll('.dot');
dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    current = parseInt(e.target.dataset.index);
    showBanner(current);
  });
});

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[current].classList.add('active');
}

// === BOTÕES DE WHATSAPP POR PRODUTO ===
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

// === BANNER SUPERIOR COM FRASES ===
const mensagens = [
  "25% OFF na segunda peça — aproveite agora!",
  "Frete grátis acima de R$199",
  "Compre 2 e ganhe 1 brinde exclusivo!",
  "Descontos especiais só hoje!"
];

let index = 0;
const banner = document.getElementById("topBanner");

if (banner) {
  banner.textContent = mensagens[index];
  setInterval(() => {
    index = (index + 1) % mensagens.length;
    banner.textContent = mensagens[index];
  }, 5000);
}

// === CARRINHO ===
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function addToCart(produto) {
  carrinho.push(produto);
  alert(`${produto} foi adicionado ao carrinho.`);
  updateCartCount();
  salvarCarrinho();
}

function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    cartCount.textContent = carrinho.length;
  }
}

function exibirCarrinho() {
  const modal = document.getElementById('cart-modal');
  const lista = document.getElementById('cart-items');
  lista.innerHTML = '';

  if (carrinho.length === 0) {
    lista.innerHTML = '<li>Seu carrinho está vazio.</li>';
  } else {
    carrinho.forEach((item, index) => {
      const li = document.createElement('li');

      const nomeSpan = document.createElement('span');
      nomeSpan.classList.add('item-nome');
      nomeSpan.textContent = item;

      const buttonGroup = document.createElement('div');
      buttonGroup.classList.add('button-group');

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Excluir';
      removeBtn.classList.add('remove-btn');
      removeBtn.onclick = function () {
        removeItemFromCart(index);
      };

      const addBtn = document.createElement('button');
      addBtn.textContent = 'Adicionar +';
      addBtn.classList.add('add-btn');
      addBtn.onclick = function () {
        carrinho.push(item);
        salvarCarrinho();
        exibirCarrinho();
        updateCartCount();
      };

      buttonGroup.appendChild(removeBtn);
      buttonGroup.appendChild(addBtn);

      li.appendChild(nomeSpan);
      li.appendChild(buttonGroup);
      lista.appendChild(li);
    });
  }

  modal.style.display = 'block';
}

function removeItemFromCart(index) {
  carrinho.splice(index, 1);
  salvarCarrinho();
  exibirCarrinho();
}

document.addEventListener('DOMContentLoaded', () => {
  const btnAbrirCarrinho = document.querySelector('.cart-link');
  const btnFecharCarrinho = document.querySelector('.close-cart');
  const btnFinalizar = document.querySelector('.finalizar-btn');

  updateCartCount(); // <-- Importante para mostrar o total ao carregar a página

  if (btnAbrirCarrinho) {
    btnAbrirCarrinho.addEventListener('click', (e) => {
      e.preventDefault();
      exibirCarrinho();
    });
  }

  if (btnFecharCarrinho) {
    btnFecharCarrinho.addEventListener('click', () => {
      const modal = document.getElementById('cart-modal');
      modal.style.display = 'none';
    });
  }

  if (btnFinalizar) {
    btnFinalizar.addEventListener('click', () => {
      let mensagem = 'Estou finalizando minha compra! Itens:\n';

      carrinho.forEach(item => {
        mensagem += `- ${item}\n`;
      });

      if (carrinho.length === 0) {
        mensagem = 'Estou interessado em saber mais sobre os produtos.';
      }

      const numero = '5521964269909';
      const mensagemEncoded = encodeURIComponent(mensagem);
      const link = `https://wa.me/${numero}?text=${mensagemEncoded}`;

      window.open(link, '_blank');

      // Limpa o carrinho após a finalização
      carrinho = [];
      localStorage.removeItem('carrinho');
      updateCartCount();
      exibirCarrinho();
    });
  }
});
