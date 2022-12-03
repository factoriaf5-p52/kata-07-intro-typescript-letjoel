

const calculateBmi  = (height: number, weight: number): string => {
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

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

try {
    console.log(calculateBmi(a, b)); 
} catch (error: unknown) {
  let errorMessage = 'Something went wrong.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}




