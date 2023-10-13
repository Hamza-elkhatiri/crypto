// Code pour vérifier la session sur le tableau de bord (dashboard.html)
document.addEventListener('DOMContentLoaded', () => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        // L'utilisateur est connecté, affichez les informations du tableau de bord
        const userData = JSON.parse(storedUserData);
        document.getElementById('welcome-message').textContent = `Bienvenue, ${userData.firstname} !`;
    } else {
        // L'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
        window.location.href = 'account.html'; // Ou tout autre URL de connexion
    }
});
