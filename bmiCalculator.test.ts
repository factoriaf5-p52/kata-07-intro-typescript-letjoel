import {calculateBmi} from './bmiCalculator'


describe('bmiCalculator is a function', ()=> {
    test('Calculate BMI is function', ()=> expect(typeof calculateBmi).toBe('function'))
    
})

describe('bmiCalcultor for Obese person', ()=>{
    test('bmiCalculator with 150m and 120kg is Obese',()=>{
        expect(calculateBmi(150,120)).toEqual('Obese')
    })
})

describe('bmiCalcultor for Underweight person', ()=>{
    test('bmiCalculator with 170m and 40kg is Underweight',()=>{
        expect(calculateBmi(170,40)).toEqual('Underweight')
    })
})
