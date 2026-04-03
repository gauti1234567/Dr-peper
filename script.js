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
// Flavors ki list
const flavorsList = ["Cherry", "Vanilla", "Almond", "Caramel", "Licorice", "Ginger", "Lemon", "Nutmeg"];

const flavorGrid = document.getElementById('flavorGrid');

// Bubbles ko screen par dikhana
flavorsList.forEach(flavor => {
    const box = document.createElement('div');
    box.innerText = flavor;
    box.style.cssText = "padding: 20px; border: 2px solid #F4E8D8; border-radius: 50px; cursor: pointer; transition: 0.3s;";
    
    // CLICK EVENT: Click karne par kya hoga
    box.onclick = function() {
        this.style.background = "#6B0D1C";
        this.style.transform = "scale(1.1)";
        alert("You discovered the " + flavor + " note in Dr Pepper!");
    };
    
    flavorGrid.appendChild(box);
});
