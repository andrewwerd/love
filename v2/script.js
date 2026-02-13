// Show/hide surprise message
function showMessage() {
    const message = document.getElementById('surpriseMessage');
    message.classList.toggle('show');
    
    // Trigger party if message is shown
    if (message.classList.contains('show')) {
        celebrateWithConfetti();
        createFlowers();
    }
}

// Card click handler - create heart explosion
function cardClick() {
    // Create multiple hearts
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 100);
    }
    
    // Show special message
    const special = document.getElementById('specialMessage');
    special.classList.add('show');
    
    // Reset after 3 seconds
    setTimeout(() => {
        special.classList.remove('show');
    }, 3000);
}

// Create floating hearts on click
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'dynamic-heart';
    heart.innerHTML = '❤️';
    
    // Random position
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight - 50;
    
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    
    // Random horizontal movement
    const tx = (Math.random() - 0.5) * 200;
    heart.style.setProperty('--tx', tx + 'px');
    
    document.body.appendChild(heart);
    
    // Remove element after animation
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Celebration confetti effect
function celebrateWithConfetti() {
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 150);
    }
}
// Create flowers animation
function createFlowers() {
    const flowers = ['🌹', '🌷', '🌸', '🌻', '🌺'];
    
    for (let i = 0; i < 1000; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
            
            // Random horizontal position
            const x = Math.random() * window.innerWidth;
            flower.style.left = x + 'px';
            flower.style.top = '-60px';
            
            document.body.appendChild(flower);
            
            // Remove element after animation
            setTimeout(() => {
                flower.remove();
            }, 5000);
        }, i * 10);
    }
}

// Music toggle
let isPlayingMusic = false;
let audioElement = null;

function toggleMusic() {
    const btn = event.target.closest('.btn-music');
    
    if (!isPlayingMusic) {
        // Play music - create a simple beep or use audio context
        isPlayingMusic = true;
        btn.classList.add('playing');
        playSimpleMusic();
    } else {
        // Stop music
        isPlayingMusic = false;
        btn.classList.remove('playing');
        if (audioElement) {
            audioElement.pause();
        }
    }
}

// Simple music generation using Web Audio API
function playSimpleMusic() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [262, 294, 330, 349, 392, 440, 494]; // Do, Re, Mi, Fa, Sol, La, Si
    
    let time = audioContext.currentTime;
    
    // Simple romantic melody
    const melody = [392, 392, 440, 392, 494, 440];
    
    melody.forEach((freq, index) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        
        osc.frequency.value = freq;
        osc.type = 'sine';
        
        gain.gain.setValueAtTime(0.3, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);
        
        osc.connect(gain);
        gain.connect(audioContext.destination);
        
        osc.start(time);
        osc.stop(time + 0.5);
        
        time += 0.5;
    });
}

// Add keyboard interaction
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        createHeart();
    }
});

// Click anywhere on the page to create hearts
document.addEventListener('click', (e) => {
    // Don't create hearts when clicking buttons
    if (!e.target.classList.contains('btn')) {
        // Uncomment line below to create hearts on any click
        // createHeart();
    }
});

// Mouse move effect - subtle
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Initialize page
window.addEventListener('load', () => {
    console.log('💕 Валентинка загружена! 💕');
    
    // Optional: Create a few hearts on load for atmosphere
    setTimeout(() => {
        createHeart();
    }, 500);
});

// Function to reset surprise message by clicking elsewhere
document.addEventListener('click', (e) => {
    if (e.target.id === 'surpriseMessage' || e.target.closest('#surpriseMessage')) {
        return;
    }
});

