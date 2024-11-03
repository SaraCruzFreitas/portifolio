function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var sunIcon = document.getElementById("sun-icon");
    var moonIcon = document.getElementById("moon-icon");

    sunIcon.style.display = body.classList.contains("dark-mode") ? "block" : "none";
    moonIcon.style.display = body.classList.contains("dark-mode") ? "none" : "block";

    // Salva a preferência no localStorage
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
}

// Carrega a preferência no carregamento da página
window.onload = function () {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        document.getElementById("sun-icon").style.display = "block";
        document.getElementById("moon-icon").style.display = "none";
    }
}