const calculateBmi  = (height: number, weight: number) => {
    //BMI: masa dividido por (estatura al cuadrado)
    let bmi = weight / ((height/100)**2)
    if (bmi < 18.5) {
        return "Underweight";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal (healthy weight)";
    }
    if (bmi > 24.9 && bmi <= 29.9 ) {
        return "Overweight";
        
    }
    if (bmi > 30) {
        return "Obese"; 
    }

    
  
}

console.log(calculateBmi(180, 74)); 