// Exemplo de JS simples só pra interação básica

// Scroll suave para seções
const links = document.querySelectorAll('.nav a');

for (const link of links) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  const target = document.querySelector(targetId);

  window.scrollTo({
    top: target.offsetTop - 60,
    behavior: 'smooth'
  });
}

// Simulação de envio do formulário
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
  form.reset();
});

