// Stripe Publishable Key - Ersetzen Sie dies mit Ihrem echten Key
const STRIPE_PUBLISHABLE_KEY = 'pk_test_your_publishable_key_here';

// Initialize Stripe
let stripe;
if (typeof Stripe !== 'undefined') {
    stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('PetFeeder Pro application started');
    
    // Get all checkout buttons
    const checkoutButtons = document.querySelectorAll('.checkout-btn');
    
    checkoutButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const productName = this.getAttribute('data-name');
            const amount = parseInt(this.getAttribute('data-amount'));
            const currency = this.getAttribute('data-currency');
            
            console.log('Checkout clicked:', { productName, amount, currency });
            
            // Disable button during processing
            button.disabled = true;
            button.textContent = '⏳ Wird verarbeitet...';
            
            try {
                // For Netlify deployment, redirect to AliExpress
                // Since we can't run a Node.js server on Netlify static hosting
                const aliexpressUrl = 'https://de.aliexpress.com/item/1005009728243260.html?spm=a2g0o.tesla.0.0.2eb5PBnCPBnCEe&afTraceInfo=1005009728243260__pc__c_ppc_item_bridge_pc_same_wf__0XVp8NS__1759687441077&gatewayAdapt=glo2deu';
                
                // Show confirmation
                const confirmed = confirm(
                    `Sie werden zu unserem Partner weitergeleitet, um "${productName}" für €${(amount/100).toFixed(2)} zu kaufen.\n\n` +
                    'Möchten Sie fortfahren?'
                );
                
                if (confirmed) {
                    // Redirect to AliExpress
                    window.open(aliexpressUrl, '_blank');
                }
                
                // Re-enable button
                button.disabled = false;
                button.textContent = `🛒 Jetzt bestellen - Nur €${(amount/100).toFixed(2)}`;
                
            } catch (error) {
                console.error('Error:', error);
                alert('Es gab ein Problem. Bitte versuchen Sie es erneut.');
                
                // Re-enable button
                button.disabled = false;
                button.textContent = `🛒 Jetzt bestellen - Nur €${(amount/100).toFixed(2)}`;
            }
        });
    });
    
    // Add smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    console.log('All event listeners attached successfully');
});