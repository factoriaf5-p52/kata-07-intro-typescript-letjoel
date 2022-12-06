interface ExerciseReturnType { 
    
    periodLength: number;
    trainingDays: number;
    target: number;
    average: number; 
    success: boolean;
    rating: number; //1-3
    ratingDescription: string;
}


// const parseArguments = (args: Array<string>): Exercise => {
//   if (args.length < 2) throw new Error('Not enough days');
//   if (args.length > 100) throw new Error('Too many days');

//   if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//     return {
//       value1: Number(args[2]),
//       value2: Number(args[3])
//     }
//   } else {
//     throw new Error('Provided values were not numbers!');
//   }
// }

type ratingLimits = 1 | 2 | 3;


export function calculateExercises(targetValue:number, exerciseHoursArray:number[]):ExerciseReturnType {
    
    console.log(exerciseHoursArray);
    let periodLength = exerciseHoursArray.length;
    let trainingDays = exerciseHoursArray.filter((num:number) => num>0).length;
    let target = targetValue;
    let average = exerciseHoursArray.reduce((acc:number,num:number)=>acc+num) / exerciseHoursArray.length;
    let success:boolean;
        if (average >= target) {
            success = true;
        }else{
            success = false;
        }

    let rating:ratingLimits;
        if (average > 3) {
            rating = 3;
        }
        if (average > 2 && average <= 3) {
            rating = 2;
        }
        if (average <= 2) {
            rating = 1;
        }

    let ratingDescription;
        if (average > 3) {
            ratingDescription = 'amazing, you are on fit';
        }
        if (average > 2 && average <= 3) {
            ratingDescription = 'you are doing really well';
        }
        if (average <= 2) {
            ratingDescription = 'not too bad but could be better';
        }        
   


    return {
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: success,
        rating: rating, 
        ratingDescription: ratingDescription,
        average: average, 
        target: target,
    }
    
}; 

// const arg1: number = Number(process.argv[3]);
// const arg2: number[] = Number[(process.argv[2])];
// console.log(calculateExercises(arg1, arg2)); 


interface argumentValues {
    target: number;
    arrayHours: number[];
}


export function isNumber(value:any) {

    if (/^[+-]?\d+(\.\d+)?$/.test(value) || /^\d+$/.test(value)) {
        return true;
    }else {return false}

}

const parseArguments = (args: Array<string>): argumentValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 104) throw new Error('Too many arguments, enter maximum 100 days');


  let arg2NaNCheck = !isNaN(Number(args[2])); //target is number?
  let arrayAreNumbers = true;
  let newStringArrayHours = args.slice(3, args.length);
  let newNumbersArrayHours = [];
  for (let i = 0; i < newStringArrayHours.length; i++) {
    newNumbersArrayHours.push(Number(newStringArrayHours[i]));
    if (!isNumber(newStringArrayHours[i])) {
        arrayAreNumbers = false;
    }
  }

  if (!arrayAreNumbers || !arg2NaNCheck) {
    throw new Error('You have not entered only numbers');
  }else {
    return {
      target: Number(args[2]),
      arrayHours: newNumbersArrayHours
    }
  }
 



}

try {
    const { target, arrayHours } = parseArguments(process.argv);

    console.log(calculateExercises(target, arrayHours));
    

} catch (error: unknown) {
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}