function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}


const navLinks = document.querySelectorAll('.nav-link');

// Adiciona um evento de clique em cada link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Impede o comportamento padrão do link (que seria navegar imediatamente)
        event.preventDefault();
        
        // Seleciona a seção correspondente ao href do link
        const targetId = this.getAttribute('href').substring(1); // Retira o '#' do href
        const targetSection = document.getElementById(targetId);
        
        // Rola até a seção com a animação suave
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'  // Define que a rolagem vai começar no topo da seção
        });
    });
});
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


function indicator(e) {
   marker.style.left = e.offsetLeft + "px";
   marker.style.width = e.offsetWidth + "px";
}
item.forEach((link) => {
   link.addEventListener("click", (e) => {
      indicator(e.target);
   });
});

function showSection(sectionId) {
   document.querySelectorAll(".section-content").forEach(section => {
      section.classList.remove("active");
   });
   document.getElementById(sectionId).classList.add("active");
}
document.addEventListener("DOMContentLoaded", () => {
    showSection("sites");
 });