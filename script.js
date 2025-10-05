// Stripe Publishable Key - Live Key
const STRIPE_PUBLISHABLE_KEY = 'pk_live_51SEvie99LZyq13UTcLSfFmRyj645FMyMnbBFSoAWhqfRO9dFGcDOKvTKKSk2MvYOEfgY5ESBaZCN0raZC3IYQHqE00lETa6zjs';

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
            const originalText = button.textContent;
            button.textContent = '⏳ Wird verarbeitet...';
            
            try {
                // Call Netlify serverless function to create checkout session
                const response = await fetch('/.netlify/functions/create-checkout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        item: {
                            name: productName,
                            amount: amount,
                            currency: currency,
                            description: '3-in-1 Automatischer Futterspender für Katzen und Hunde'
                        }
                    })
                });

                const data = await response.json();

                if (response.ok && data.url) {
                    // Redirect to Stripe Checkout
                    window.location.href = data.url;
                } else {
                    throw new Error(data.error || 'Checkout-Sitzung konnte nicht erstellt werden');
                }
                
            } catch (error) {
                console.error('Error:', error);
                alert('Es gab ein Problem mit der Zahlung. Bitte versuchen Sie es erneut oder kontaktieren Sie uns.');
                
                // Re-enable button
                button.disabled = false;
                button.textContent = originalText;
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
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all benefit cards
    document.querySelectorAll('.benefit-card, .product-showcase, .cta-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    console.log('All event listeners attached successfully');
});