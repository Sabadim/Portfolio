const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".list");

// Mudança de ícone ao clicar no menu Hamburguer no mobile
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