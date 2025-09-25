  // Script pour l'atelier
        document.addEventListener('DOMContentLoaded', function() {
            // Menu mobile
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const closeMobileMenu = document.getElementById('closeMobileMenu');
            const mobileNav = document.getElementById('mobileNav');
            const overlay = document.getElementById('overlay');
            
            function openMobileMenu() {
                mobileNav.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            
            function closeMobileMenuFunc() {
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            
            mobileMenuBtn.addEventListener('click', openMobileMenu);
            closeMobileMenu.addEventListener('click', closeMobileMenuFunc);
            overlay.addEventListener('click', closeMobileMenuFunc);
            
            // Simulation des actions sur les créations
            const creationActions = document.querySelectorAll('.creation-action');
            creationActions.forEach(action => {
                action.addEventListener('click', function(e) {
                    e.preventDefault();
                    const card = this.closest('.creation-card');
                    const title = card.querySelector('h3').textContent;
                    
                    if (this.textContent === 'Précommander') {
                        alert(`Précommande pour: ${title}`);
                    } else {
                        alert(`Détails de: ${title}`);
                    }
                });
            });
            
            // Simulation de lecture vidéo
            const videoPlays = document.querySelectorAll('.video-play');
            videoPlays.forEach(play => {
                play.addEventListener('click', function() {
                    const videoCard = this.closest('.video-card');
                    const videoTitle = videoCard.querySelector('h3').textContent;
                    alert(`Lecture de la vidéo: ${videoTitle}`);
                });
            });
        });