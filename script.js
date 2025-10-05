// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('AutoNap application started');
    
    // Example of dynamic content update
    const welcomeMessage = document.querySelector('h1');
    if (welcomeMessage) {
        setTimeout(() => {
            welcomeMessage.textContent = 'AutoNap ist bereit!';
        }, 1000);
    }
    
    // Add any additional JavaScript functionality here
});