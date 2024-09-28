let calculation = localStorage.getItem('Calculation') || '';

function updateCalculation(btnValue) {
  calculation += btnValue;
  document.querySelector('.js-resultat-p')
      .innerHTML = calculation; 
  localStorage.setItem('Calculation', calculation);
}

function calculateResult() {
  calculation = eval(calculation);
  document.querySelector('.js-resultat-p')
       .innerHTML = calculation;
  ocalStorage.setItem('Calculation', calculation);
}

function clearResult() {
  calculation = '';
  document.querySelector('.js-resultat-p')
     .innerHTML = calculation;
  localStorage.setItem('Calculation', calculation);
}