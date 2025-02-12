document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('close-btn');
   
    if(openBtn){
        openBtn.addEventListener('click', () => {
            sidebar.classList.add('show');
           
        });
    }

    if(closeBtn){
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('show');
            
        });

    }

    
});

// Seleciona todos os cards
const cards = document.querySelectorAll('.item-card-skill');

// Função para verificar se o card está bem visível na tela
function checkVisibility() {
  cards.forEach(card => {
    const cardPosition = card.getBoundingClientRect(); // Pega a posição do card na tela

    // Verifica se pelo menos 80% do card está visível na tela
    if (cardPosition.top < window.innerHeight * 0.8 && cardPosition.bottom >= window.innerHeight * 0.2) {
      card.classList.add('visible'); // Adiciona a classe 'visible' para ativar a animação
    } else {
      card.classList.remove('visible'); // Remove a classe 'visible' quando o card não estiver suficientemente visível
    }
  });
}

// Chama a função sempre que a página for rolada
window.addEventListener('scroll', checkVisibility);

// Chama a função uma vez no carregamento para verificar se algum card já está visível
checkVisibility();

