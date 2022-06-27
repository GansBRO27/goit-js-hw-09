function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
console.log(startBtn);
const stopBtn = document.querySelector('[data-stop]');
let changeBgid = null;
startBtn.addEventListener('click', () => {
  changeBgid = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    console.log(changeBgid);
  }, 1000);

  startBtn.setAttribute('disabled', 'disabled');
  stopBtn.removeAttribute('disabled', 'disabled');
});
stopBtn.addEventListener('click', () => {
  clearInterval(changeBgid);
  stopBtn.setAttribute('disabled', 'disabled');
  startBtn.removeAttribute('disabled', 'disabled');
});
