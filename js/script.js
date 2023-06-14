// Mudança de ícone ao clicar no menu Hamburguer no mobile
let hamburguer = document.querySelector(".hamburguer");
let navMenu = document.querySelector(".list");
let hamburguerIcon = document.getElementById("hamburguer-icon");
let navLink = document.querySelectorAll('.nav-link');

function ChangeIcon() {;
    if (hamburguerIcon.classList.contains('fa-bars')) {
        hamburguerIcon.classList.remove("fa-bars");
        hamburguerIcon.classList.add("fa-xmark");
        navMenu.classList.toggle('active');
    } else {
        hamburguerIcon.classList.remove("fa-xmark");
        hamburguerIcon.classList.add("fa-bars");
        navMenu.classList.toggle('active');
    }

}
// Fim da mudança de ícone ao clicar no menu Hamburguer no mobile

// Fechar o Menu quando clicar em qualquer item da lista
function closeMenu() {

    hamburguerIcon.classList.remove("fa-xmark");
    hamburguerIcon.classList.add("fa-bars");
    navMenu.classList.toggle('active');

};

navLink.forEach(item => {
    item.addEventListener('click', closeMenu);
});
// Fim do fechar o Menu quando clicar em qualquer item da lista

// Efeito Flip nas letras do nome
document.addEventListener('DOMContentLoaded', () => {
    let cards = document.querySelectorAll('.card');
    let currentIndex = 0;

    setTimeout(() => {
        flipCard();
    }, 1000);

    function flipCard() {
        cards[currentIndex].classList.add('flipped');

        currentIndex++;

        if (currentIndex < cards.length) {
            setTimeout(() => {
                flipCard();
            }, 200);
        }
    }
});
// Fim do efeito flip nas letras do nome

