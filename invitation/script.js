// Récupération des éléments du DOM
let click = document.getElementById('discover-btn');
let loader = document.getElementById('loader');

// Ajouter un événement au clic du bouton
click.addEventListener('click', function () {
    // Masquer le bouton
    click.style.display = 'none';

    // Afficher le loader
    loader.style.display = 'flex';

    // Simuler un délai avant redirection
    setTimeout(function () {
        // Rediriger vers images.html après 2 secondes
        window.location.href = 'images.html';
    }, 4000); // 2000 ms = 2 secondes
});