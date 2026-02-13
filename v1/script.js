const fireworksContainer = document.querySelector('.fireworks');
const yesBtn = document.getElementById('yes-btn');
const loveBtn = document.getElementById('love-btn');
const responseBlock = document.getElementById('response-block');
const responseText = document.getElementById('response');
const questionBlock = document.getElementById('question-block');

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
    showResponse(false)
});

loveBtn.addEventListener('click', () => {
    showResponse(true)
});

// Запускаем дополнительные фейерверки при нажатии кнопки
function showResponse(flag) {
    if (flag) {
        responseText.innerHTML  = 'В этот День Святого Валентина хочу подарить тебе не только свою любовь, но и самые нежные моменты, которые будут в нашей памяти долго после того, как этот день закончится.'
    }
    questionBlock.style.opacity = 0;
    setTimeout(() => {
        questionBlock.style.display = 'none'
        responseBlock.style.display = 'block'
        setTimeout(() => {
            responseBlock.style.opacity = 1;
        }, 500)
    }, 500)
}
