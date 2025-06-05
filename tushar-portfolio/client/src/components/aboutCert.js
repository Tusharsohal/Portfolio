// aboutCert.js
export const initCertificateClicks = () => {
    const certContainer = document.querySelector('.cert-container');
    const certCards = document.querySelectorAll('.cert-card');
    
    if (!certContainer || !certCards.length) {
        console.warn('Certificate elements not found');
        return;
    }
    
    certCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('.cert-link')) {
                return;
            }
            
            if (this.classList.contains('clicked')) {
                this.classList.remove('clicked');
                certContainer.classList.remove('has-focus');
                return;
            }
            
            certCards.forEach(c => c.classList.remove('clicked'));
            certContainer.classList.remove('has-focus');
            
            this.classList.add('clicked');
            certContainer.classList.add('has-focus');
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.cert-card') && !e.target.closest('.cert-container')) {
            certCards.forEach(c => c.classList.remove('clicked'));
            certContainer.classList.remove('has-focus');
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            certCards.forEach(c => c.classList.remove('clicked'));
            certContainer.classList.remove('has-focus');
        }
    });
};