const fireworksContainer = document.querySelector('.fireworks');

function createFirework() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    for (let i = 0; i <= randomNumber; i++) {
        let firework = document.createElement('div');
        firework.classList.add('firework');
        
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;

        fireworksContainer.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 2000);
    }

}

setInterval(createFirework, 100);