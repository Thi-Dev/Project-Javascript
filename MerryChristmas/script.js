
// ++++++++++++++++++++++++++++ click button et settimeout 
// Fonction pour gérer la logique de la page 1
function handlePage1() {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const cubeLoader = document.querySelector('.cube-loader-container');
    const userNameInput = document.getElementById('user-name');
    const envelope = document.querySelector('.loader'); // L'enveloppe
    const title = document.querySelector('.salutation'); // Le titre ou texte principal

    // Lorsque l'utilisateur clique sur le bouton "Envoyer"
    sendBtn.addEventListener('click', () => {
        const userName = userNameInput.value.trim();

        // Vérifier si le nom est vide
        if (!userName) {
            alert("Please enter your name!"); // Alerte en cas de champ vide
            return;
        }

        // Enregistrer le nom dans le localStorage
        localStorage.setItem('userName', userName);

        // Masquer l'enveloppe, le formulaire et le titre
        envelope.style.display = 'none';
        title.style.display = 'none';
        userInput.style.display = 'none';

        // Afficher les cubes de chargement
        cubeLoader.style.display = 'flex';

        // Après 2,5 secondes, rediriger vers la page 2
        setTimeout(() => {
            window.location.href = './page2.html'; // Redirection après le délai
        }, 2500);
    });
}

// Fonction pour gérer la logique de la page 2
function handlePage2() {
    const greetingMessage = document.getElementById('greeting-message');
    const audio = document.getElementById('jingle-bells'); // L'élément audio

    // Récupérer le nom de l'utilisateur depuis le localStorage
    const userName = localStorage.getItem('userName');

    // Vérifier si un nom est disponible et l'afficher
    if (userName) {
        greetingMessage.textContent = `Joyeux Noël, ${userName} !`;
    } else {
        greetingMessage.textContent = "Joyeux Noël !";
    }

    // Lancer la chanson après le chargement de la page 2
    audio.play().catch((error) => {
        console.log("Lecture automatique bloquée par le navigateur :", error);
    });
}

// Détection automatique de la page
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('send-btn')) {
        // Page 1 détectée
        handlePage1();
    } else if (document.getElementById('greeting-message')) {
        // Page 2 détectée
        handlePage2();
    }
});

//**************** MUSIQUE JUNGLE BELL */



// ********************* Arbre de Noel **************************
// click on the tree to see the animation again. 

$(document).ready(function(){
    $('#christmas-tree').mouseleave(function(){
      $(this).removeClass('clicked');
    }).click(function(){
      $(this).addClass('clicked').html($(this).html());
    });
  });

   

// ++++++++++++++++++++++++++++++++++   Carte de voeux

// click on the card to open and play the music.
// music source: (free music) youtube audio library - Jingle Bells (by Jingle Punks).
// tested in the Firefox browser.

// let input = document.getElementById("open");
// let audio = document.getElementById("player");

// input.addEventListener("click", function(){
//   if(audio.paused){
//     audio.play();
//     audio.currentTime = 0;
//     input.innerHTML = "Pause";
//   } else {
//     audio.pause();
//     input.innerHTML = "Play";
//   }
// });






// ******************     chocolat box

// hover on chocolate box to see the flavours.

$(document).ready(function(){
    $("#top-right").on('mouseenter',function() {
        $("#white").show();
    });
    $("#top-right").on('mouseout',function() {
        $("#white").hide();
    });
});

$(document).ready(function(){
    $("#bottom-left").on('mouseenter',function() {
        $("#milk").show();
    });
    $("#bottom-left").on('mouseout',function() {
        $("#milk").hide();
    });
});

$(document).ready(function(){
    $("#bottom-right").on('mouseenter',function() {
        $("#truffle").show();
    });
    $("#bottom-right").on('mouseout',function() {
        $("#truffle").hide();
    });
});

$(document).ready(function(){
    $("#top-left").on('mouseenter',function() {
        $("#truffle2").show();
    });
    $("#top-left").on('mouseout',function() {
        $("#truffle2").hide();
    });
});

// +++++++++++++++++++++    ++++++++++++ la neige
