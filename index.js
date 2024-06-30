"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(dynamic("inquirer"));
// 1) Computer Will generate a random number - 
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result
const randomNumber = 13;
const answers = inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number",
    },
]);
console.log(answers);
