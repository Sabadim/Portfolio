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