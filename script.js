const fireworksContainer = document.querySelector('.fireworks');
const yesBtn = document.getElementById('yes-btn');
const loveBtn = document.getElementById('love-btn');
const responseText = document.getElementById('response');
const questionBlock = document.getElementById('question');

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

// Анимация кнопок
yesBtn.addEventListener('click', () => {
    showResponse()
});

loveBtn.addEventListener('click', () => {
    showResponse()
});

// Запускаем дополнительные фейерверки при нажатии кнопки
function showResponse() {
    responseText.style.opacity = 1;
    responseText.style.display = 'block';
    questionBlock.style.display = 'none'
}
