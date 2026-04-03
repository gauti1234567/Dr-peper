document.addEventListener('DOMContentLoaded', () => {
    const bubbleContainer = document.getElementById('bubbleContainer');

    // Bubbles Banane ka function
    function createBubble() {
        const bubble = document.createElement('div');
        const size = Math.random() * 20 + 10 + 'px';
        
        bubble.className = 'bubble';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.setProperty('--duration', Math.random() * 4 + 4 + 's');
        
        bubbleContainer.appendChild(bubble);
        
        setTimeout(() => {
            bubble.remove();
        }, 8000);
    }

    // Har 400ms mein ek naya bubble banega
    setInterval(createBubble, 400);
});