function bmi(weight, height) {
  // initialize bmi variable 
  // ternary comparison
  let bmi = weight/height**2
  return bmi <= 18.5 
    ? "Underweight" 
  : bmi <= 25
    ? "Normal"
  : bmi <= 30
    ? "Overweight"
  : bmi > 30
    ? "Obese"
  : null
}