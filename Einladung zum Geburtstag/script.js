const envelope = document.querySelector('.envelope-wrapper');
const nameInput = document.getElementById('nameInput');
const submitButton = document.getElementById('submitName');
const personalizedGreeting = document.getElementById('personalizedGreeting');

// Ajouter un événement pour l'ouverture de l'enveloppe
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});

