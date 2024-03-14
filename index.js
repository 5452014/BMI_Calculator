const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const heightInput = document.querySelector('#height');
  const weightInput = document.querySelector('#weight');

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    resultDiv.innerHTML = '<p>Please enter valid height and weight.</p>';
    
  }

  const bmi = calculateBMI(weight, height);
  const bmiCategory = getBMICategory(bmi);

  resultDiv.innerHTML = `<p>Your BMI is: ${bmi.toFixed(2)}</p><p>BMI Category: ${bmiCategory}</p>`;
});

function calculateBMI(weight, height) {
  // Convert height from cm to meters
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}