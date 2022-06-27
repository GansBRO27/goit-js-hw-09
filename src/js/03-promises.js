const formEl = document.querySelector('.form');
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

formEl.addEventListener('submit', e => {
  e.preventDefault();
  let step = Number(formEl.elements.step.value);
  let delayy = Number(formEl.elements.delay.value);
  for (let i = 0; i < formEl.elements.amount.value; i++) {
    createPromise(i, delayy)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delayy += step;
  }
});
