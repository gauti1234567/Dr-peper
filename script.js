document.addEventListener('DOMContentLoaded', () => {
    // 1. Bubbles Background Animation
    const bubbleContainer = document.getElementById('bubbleContainer');
    function createBubble() {
        const bubble = document.createElement('div');
        const size = Math.random() * 20 + 10 + 'px';
        bubble.className = 'bubble';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.setProperty('--duration', Math.random() * 4 + 4 + 's');
        bubbleContainer.appendChild(bubble);
        setTimeout(() => { bubble.remove(); }, 8000);
    }
    setInterval(createBubble, 400);

    // 2. Flavor Notes Generator (Mystery of 23)
    const flavors = ["Cherry", "Vanilla", "Almond", "Caramel", "Licorice", "Ginger", "Lemon", "Nutmeg", "Clove", "Plum", "Apricot", "Blackberry"];
    const grid = document.getElementById('flavorGrid');

    flavors.forEach(f => {
        const note = document.createElement('div');
        note.innerText = f;
        note.style.cssText = "padding: 15px 25px; border: 2px solid #F4E8D8; border-radius: 50px; cursor: pointer; transition: 0.3s; font-weight: bold;";
        
        note.onmouseover = () => { note.style.background = "#6B0D1C"; note.style.transform = "scale(1.1)"; };
        note.onmouseout = () => { note.style.background = "transparent"; note.style.transform = "scale(1.0)"; };
        note.onclick = () => { alert("You found the " + f + " note!"); };
        
        grid.appendChild(note);
    });
});
