import {calculateExercises, isNumber } from "./exerciseCalculator"

describe('isNumber is a function',()=>{
    test('isNumber is a function declared',()=>{
        expect(typeof isNumber).toBe('function')
    })
})

describe('calculateExercises is a function',()=>{
    test('calculateExercises is a function declared',()=>{
        expect(typeof calculateExercises).toBe('function')
    })
})

describe('isNumber',()=>{
    test('isNumber returns true if number integer',()=>{
        expect(isNumber(2)).toEqual(true)
    })
})

describe('isNumber',()=>{
    test('isNumber returns true if number float',()=>{
        expect(isNumber(2.5)).toEqual(true)
    })
})
