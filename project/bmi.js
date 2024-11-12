const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results.innerHTML = `<span>${bmi}</span>`
    if (bmi < 18.6) {
      results.innerHTML = `Your bmi is ${bmi} and you are Under Weight`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `Your bmi is ${bmi} and you are in normal range`;
    } else {
      results.innerHTML = `Your bmi is ${bmi} and you are Overweight`;
    }
  }
});
