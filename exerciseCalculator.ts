

interface ExerciseReturnType { 
    periodLength: number;
    trainingDays: number;
    target: number;
    average: number; 
    success: boolean;
    rating: number; //1-3
    ratingDescription: string;
}

interface ExerciseArguments {
    exerciseHoursArray:number[];
    targetValue:number;
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


function calculateExercises(exerciseHoursArray:number[], targetValue:number):ExerciseReturnType {
    
    let periodLength = exerciseHoursArray.length;
    let trainingDays = exerciseHoursArray.filter((num:number) => num>0).length;
    let target = targetValue;
    let average = exerciseHoursArray.reduce((acc:number,num:number)=>acc+num) / exerciseHoursArray.length;
    let success:boolean;
        if (average >= target) {
            success = true;
        }

    let rating:ratingLimits;
        if (average >= 1) {
            rating = 3;
        }
        if (average >= 0.5 && average < 1) {
            rating = 2;
        }
        if (average < 0.5) {
            rating = 1;
        }

    let ratingDescription;
        if (average >= 1) {
            ratingDescription = 'amazing, you are on fit';
        }
        if (average >= 0.5 && average < 1) {
            ratingDescription = 'you are doing really well';
        }
        if (average < 0.5) {
            ratingDescription = 'not too bad but could be better';
        }        
    };


    return {
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: success,
        rating: rating, 
        ratingDescription: ratingDescription,
        average: average, 
        target: target,
    }
    
    
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1],2)); 
