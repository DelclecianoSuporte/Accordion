document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.querySelectorAll('.accordion');

    accordion.forEach(item => {
        const pergunta = item.querySelector('.pergunta-accordion');
        const resposta = item.querySelector('.resposta-accordion');
        const icone = item.querySelector('.icone'); // Alterado para pegar diretamente do item

        pergunta.addEventListener('click', () => {
            const visivel = resposta.style.display === 'block';
            resposta.style.display = visivel ? 'none' : 'block';
            icone.src = visivel ? 'imagens/icon-plus.svg' : 'imagens/icon-minus.svg'; // Muda o ícone corretamente
        });

        icone.addEventListener('click', () => {
            pergunta.click();
        });
    });
});