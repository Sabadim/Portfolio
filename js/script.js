// Mudança de ícone ao clicar no menu Hamburguer no mobile
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".list");

function ChangeIcon() {
    var hamburguerIcon = document.getElementById("hamburguer");
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