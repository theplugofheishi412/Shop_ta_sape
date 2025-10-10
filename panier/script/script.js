
// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Gestion de la quantité
document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function () {
        const input = this.parentElement.querySelector('.quantity-input');
        let value = parseInt(input.value);

        if (this.textContent === '+') {
            value++;
        } else if (this.textContent === '-' && value > 1) {
            value--;
        }

        input.value = value;
        updateCartTotal();
    });
});

// Suppression d'article
document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function () {
        this.closest('.cart-item').style.opacity = '0';
        setTimeout(() => {
            this.closest('.cart-item').remove();
            updateCartTotal();
            updateCartCount();
        }, 300);
    });
});

// Mise à jour du total
function updateCartTotal() {
    // Cette fonction  calcule le vrai total
    console.log("Mise à jour du panier...");
}

// Mise à jour du compteur du panier
function updateCartCount() {
    const count = document.querySelectorAll('.cart-item').length;
    document.querySelector('.fa-shopping-bag').nextElementSibling.textContent = count;
}

// Application du code promo
document.querySelector('.summary-card button').addEventListener('click', function () {
    const promoCode = document.querySelector('input[placeholder="Entrez votre code"]').value;
    if (promoCode.toUpperCase() === 'SAPE10') {
        alert('Code promo !');
    } else {
        alert('Code promo invalide');
    }
});

// Bouton de paiement
document.querySelector('.checkout-btn').addEventListener('click', function () {
    // alert('Redirection vers la page de paiement...');
    window.location.href = 'checkout.html'; 
});

// continuer les achats
document.querySelector('.continue-btn').addEventListener('click', function () {
    window.location.href = '../index.html';
});
