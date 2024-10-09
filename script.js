const cringeButton = document.getElementById('cringeButton');
const cringeSound = document.getElementById('cringeSound');

cringeButton.addEventListener('click', () => {
    cringeButton.classList.add('active'); // Ajoute la classe active
    cringeSound.play(); // Joue le son à chaque clic

    // Change le texte au clic
    cringeButton.textContent = '😱 Cringyyyyyy!!!!!! 😱'; 
});

// Réinitialiser le bouton après un certain temps
setTimeout(() => {
    cringeButton.classList.remove('active'); // Retire la classe active
    cringeButton.textContent = 'Cringe Button 😱 '; // Restaure le texte
}, 3000); // Ajuste la durée si nécessaire

