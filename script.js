const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['🎉', '🥳', '✨', '🎊', '🍰'],
    }).then(() => jsConfetti.addConfetti())
})