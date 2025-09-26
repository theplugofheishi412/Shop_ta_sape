// Configuration principale
const CONFIG = {
    PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    MESSAGES: {
        PASSWORD_MISMATCH: 'Les mots de passe ne correspondent pas',
        PASSWORD_REQUIREMENTS: 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre'
    }
};

// Gestion du menu mobile
document.getElementById('mobile-menu-button')?.addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu?.classList.toggle('hidden');
});

// Gestion du formulaire d'inscription
document.getElementById('register-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const password = document.getElementById('password')?.value;
    const confirmPassword = document.getElementById('confirm-password')?.value;

    if (password !== confirmPassword) {
        alert(CONFIG.MESSAGES.PASSWORD_MISMATCH);
        return;
    }

    // Collecte des données du formulaire
    const formData = {
        firstname: document.getElementById('firstname')?.value,
        lastname: document.getElementById('lastname')?.value,
        email: document.getElementById('email')?.value,
        password: password,
        phone: document.getElementById('phone')?.value,
        newsletter: document.getElementById('newsletter')?.checked
    };

    console.log('Données d\'inscription:', formData);
    // TODO: Ajouter l'appel API pour l'inscription
});

// Validation du mot de passe en temps
document.getElementById('password')?.addEventListener('input', function (e) {
    const password = e.target.value;

    if (!CONFIG.PASSWORD_REGEX.test(password)) {
        this.setCustomValidity(CONFIG.MESSAGES.PASSWORD_REQUIREMENTS);
    } else {
        this.setCustomValidity('');
    }
});

//  formulaire de connexion
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        email: document.getElementById('email')?.value,
        password: document.getElementById('password')?.value,
        remember: document.getElementById('remember')?.checked
    };
    window.location.href = "index.html";
    console.log('Tentative de connexion:', formData);
    // TODO: Ajouter l'appel API pour la connexion
});