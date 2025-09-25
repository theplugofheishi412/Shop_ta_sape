 
 // Mobile menu 
        document.getElementById('mobile-menu-button').addEventListener('click', function () {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        //
        document.getElementById('register-form').addEventListener('submit', function (e) {
            e.preventDefault();

            // Validation du formulaire
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('Les mots de passe ne correspondent pas');
                return;
            }


            
            console.log("Tentative d'inscription...");
            // Ajoutez ici votre logique d'inscription
        });

        // Validation du mot de passe 
        document.getElementById('password').addEventListener('input', function (e) {
            const password = e.target.value;
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

            if (!regex.test(password)) {
                this.setCustomValidity('Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre');
            } else {
                this.setCustomValidity('');
            }
        });


// formulaire de connexion
/*document.getElementById('login-form').addEventListener('submit', function (e) {
         
        });*/