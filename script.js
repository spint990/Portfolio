// Fonction pour basculer entre le thème clair et sombre
function toggleDarkMode() {
    // Ajoute ou retire la classe 'dark-mode' du body
    document.body.classList.toggle('dark-mode');
    
    // Enregistre la préférence dans le localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    // Change le texte du bouton
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (isDarkMode) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Thème Clair';
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Thème Sombre';
    }
}

// Vérifie la préférence enregistrée au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const storedDarkMode = localStorage.getItem('darkMode');
    
    // Par défaut, utilise le thème sombre sauf si explicitement désactivé
    if (storedDarkMode === 'false') {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Thème Sombre';
    } else {
        // Activer le thème sombre par défaut
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Thème Clair';
    }
    
    // Ajoute l'événement de clic sur le bouton
    darkModeToggle.addEventListener('click', toggleDarkMode);
});