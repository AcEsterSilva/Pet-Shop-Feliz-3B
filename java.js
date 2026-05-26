/* Seleciona o botão usando o ID dele */
const btnSaiba =
document.getElementById('btnSaiba');

/* Adiciona um evento de clique no botão */
btnSaiba.addEventListener('click', () => {

    /* Mostra uma mensagem na tela */
    alert(
        'Bem-vindo à PetLove Shop 🐶🐱'
    );

});

/* ====================================== */
/* CARRINHO */
/* ====================================== */

/* Cria variável do carrinho começando em 0 */
let carrinho = 0;

/* Seleciona o contador do carrinho */
const contador =
document.getElementById('contador');

/* Seleciona TODOS os botões comprar */
const botoesComprar =
document.querySelectorAll('.comprar');

/* Percorre todos os botões encontrados */
botoesComprar.forEach(botao => {

    /* Adiciona evento de clique */
    botao.addEventListener('click', () => {

        /* Soma +1 no carrinho */
        carrinho++;

        /* Atualiza número na tela */
        contador.innerText = carrinho;

        /* Troca o texto do botão */
        botao.innerText =
        'Adicionado ✔';

        /* Muda a cor do botão */
        botao.style.background =
        '#4CAF50';

        /* Espera 1.5 segundos */
        setTimeout(() => {

            /* Volta o texto original */
            botao.innerText =
            'Comprar';

            /* Volta a cor original */
            botao.style.background =
            '#ff914d';

        }, 1500);

    });

});

/* ====================================== */
/* FORMULÁRIO */
/* ====================================== */

/* Seleciona o formulário */
const form =
document.getElementById('formContato');

/* Evento de envio do formulário */
form.addEventListener('submit', (e) => {

    /* Impede a página de recarregar */
    e.preventDefault();

    /* Mostra mensagem */
    alert(
        'Mensagem enviada com sucesso ✉'
    );

    /* Limpa os campos */
    form.reset();

});

/* ====================================== */
/* DARK MODE */
/* ====================================== */

/* Seleciona botão dark mode */
const darkBtn =
document.getElementById('darkMode');

/* Evento clique */
darkBtn.addEventListener('click', () => {

    /* Adiciona/remove classe dark */
    document.body.classList.toggle('dark');

});

/* ====================================== */
/* MENU MOBILE */
/* ====================================== */

/* Seleciona botão do menu mobile */
const menuMobile =
document.getElementById('menuMobile');

/* Seleciona menu */
const menu =
document.getElementById('menu');

/* Evento clique */
menuMobile.addEventListener('click', () => {

    /* Adiciona/remove classe active */
    menu.classList.toggle('active');

});

/* ====================================== */
/* PESQUISA */
/* ====================================== */

/* Seleciona campo pesquisa */
const pesquisa =
document.getElementById('pesquisa');

/* Seleciona todos os produtos */
const produtos =
document.querySelectorAll('.produto');

/* Evento quando digita */
pesquisa.addEventListener('input', () => {

    /* Pega texto digitado */
    const valor =
    pesquisa.value.toLowerCase();

    /* Percorre todos os produtos */
    produtos.forEach(produto => {

        /* Pega texto do produto */
        const nome =
        produto.innerText.toLowerCase();

        /* Verifica se encontrou o texto */
        if(nome.includes(valor)){

            /* Mostra produto */
            produto.style.display =
            'block';
        }

        else{

            /* Esconde produto */
            produto.style.display =
            'none';
        }

    });

});

