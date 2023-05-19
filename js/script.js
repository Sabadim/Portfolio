// Mudança de ícone ao clicar no menu Hamburguer no mobile
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".list");
const hamburguerIcon = document.getElementById("hamburguer-icon");
const navLink = document.querySelectorAll('.nav-link');

function ChangeIcon() {;
    if (hamburguerIcon.classList.contains('fa-bars')) {
        hamburguerIcon.classList.remove("fa-bars");
        hamburguerIcon.classList.add("fa-xmark");
        navMenu.classList.toggle('active');
    } else {
        hamburguerIcon.classList.remove("fa-xmark");
        hamburguerIcon.classList.add("fa-bars");
        navMenu.classList.toggle('active')
    }


}

// Fechar o Menu quando clicar em qualquer item da lista
function closeMenu() {

    navMenu.classList.toggle('active');
    hamburguerIcon.classList.remove("fa-xmark");
    hamburguerIcon.classList.add("fa-bars");

};

navLink.forEach(item => {
    item.addEventListener('click', closeMenu);
});


// Efeito Flip nas letras do nome
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
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