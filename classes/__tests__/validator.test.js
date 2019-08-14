'use strict';

const Validator = require('../../validator/validator');
const validator = new Validator;


let str = 'HELLO';
let num = 50;
let numNeg = -5;
let arr = ['1010101'];
let obj = {help:'me'};
let func = () => {};
let bool = false;


describe('Is this a  number?',() => {

    it('Checks to see if the string is, in fact a string', () => {
        expect(validator.isString(str)).toBeTruthy();
        expect(validator.isString(num)).toBeFalsy();
        expect(validator.isString(numNeg)).toBeFalsy();
        expect(validator.isString(arr)).toBeFalsy();
        expect(validator.isString(obj)).toBeFalsy();
        expect(validator.isString(func)).toBeFalsy();
        expect(validator.isString(bool)).toBeFalsy();
    });

    it('Checks to see if the Boolean is, in fact a Boolean', () => {
        expect(validator.isBoolean(str)).toBeFalsy();
        expect(validator.isBoolean(num)).toBeFalsy();
        expect(validator.isBoolean(numNeg)).toBeFalsy();
        expect(validator.isBoolean(arr)).toBeFalsy();
        expect(validator.isBoolean(obj)).toBeFalsy();
        expect(validator.isBoolean(func)).toBeFalsy();
        expect(validator.isBoolean(bool)).toBeTruthy();
    });

    it('Checks to see if the Function is, in fact a Function', () => {
        expect(validator.isFunction(str)).toBeFalsy();
        expect(validator.isFunction(num)).toBeFalsy();
        expect(validator.isFunction(numNeg)).toBeFalsy();
        expect(validator.isFunction(arr)).toBeFalsy();
        expect(validator.isFunction(obj)).toBeFalsy();
        expect(validator.isFunction(func)).toBeTruthy();
        expect(validator.isFunction(bool)).toBeFalsy();
    });

    it('Checks to see if the Truthy is, in fact a Truthy', () => {
        expect(validator.isTruthy(str)).toBeFalsy();
        expect(validator.isTruthy(num)).toBeFalsy();
        expect(validator.isTruthy(numNeg)).toBeFalsy();
        expect(validator.isTruthy(arr)).toBeFalsy();
        expect(validator.isTruthy(obj)).toBeFalsy();
        expect(validator.isTruthy(func)).toBeFalsy();
        expect(validator.isTruthy(bool)).toBeFalsy();
    });


    it('Checks to see if the number is, in fact number', () => {
        expect(validator.isNumber('')).toBeFalsy();
        expect(validator.isNumber(false)).toBeFalsy();
        expect(validator.isNumber(10)).toBeTruthy();
        expect(validator.isNumber(-5)).toBeTruthy();
    });


    it('Checks for an Array', () => {
        expect(validator.isArray([2, 4, 6, 8, 10])).toEqual(true);
        expect(validator.isArray([1, 3, 5, 7, 9])).toEqual(true);
        expect(validator.isArray([-1, -3, -5])).toEqual(true);
        expect(validator.isArray('')).toEqual(false);
        expect(validator.isArray(10000)).toEqual(false);
    });
    it('Checks The Prop Values of an object', () => {
        const schema = {
            fields: {
                id: {type: 'string', required: true},
                name: {type: 'string', required: true},
                age: {type: 'number'},
                children: { type: 'array', valueType: 'string' },
            },
        };


        it('Checks if an Object is an Object', () => {
            let hair = {
                "firstName": "Fred",
                "lastName": "Sample",
                "hair": {
                    "type": "wavy",
                    "color": "brown"
                },
                "favoriteFoods": ["pizza", "cupcakes", "salmon"],
                "married": true,
                "kids": 3
            };


            expect(validator.isObject(hair)).toBeTruthy();
            expect(validator.isObject('')).toBeFalsy();
            expect(validator.isObject(2)).toBeFalsy();
            expect(validator.isObject([])).toBeFalsy();
        });

        })
    });


