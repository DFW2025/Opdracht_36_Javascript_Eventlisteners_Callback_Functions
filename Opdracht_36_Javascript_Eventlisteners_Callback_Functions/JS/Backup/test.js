// Javascript

// Calling a function in a function

// This is how you do it....


const formA = function ( number1) {
                                    const calcultateNumber = number1 * 2 ;
                                    return calcultateNumber ;
                                };

const formB = function (number2) {
                                    const calcultateNumber2 = number2 / 10;
                                    return calcultateNumber2;
                                };

const formC = function (number3) {
                                    const calcultateNumber3 = number3 + 100;
                                    return calcultateNumber3;
};


const doComplexCalculation = function (number4) {
                                                console.log("calculations...." );
                                                //Aanroepen van de functie in een functie
                                                const calculate = formA ( number4 );
                                                const calculate2 = formB (calculate);
                                                const calculate3 = formC(calculate2);
                                                return calculate3;
};

 // Aanroepen van de functie extern

console.log(doComplexCalculation(20));


// Of op deze manier....

const formAA = function (number1) {   
                                 return number1 * 2;
                                 };

const formBB = function (number2) {
                                 return number2 / 10;
                                 };

const formCC = function (number3) {
                                 return number3 + 100;
                                 };

const doComplexCalculation2 = function (inputnumber) {
                                                  console.log("calculations way 2...");
                                                 //Aanroepen van de functie in een functie
                                                  const calculation1 = formAA(inputnumber);
                                                  const calculation2 = formBB(calculation1);
                                                  const calculation3 = formCC(calculation2);
                                                  console.log(" written down ( " + inputnumber + " * 2 ) = ( " + calculation1 + " / 10 ) = ( " + calculation2 + " + 100 ) = " + calculation3 );
                                                  return calculation3;
};

// Aanroepen van de functie extern

console.log(doComplexCalculation2(40));


// --------------------------------------------------------------------------------

// LOOPS

// While Loops 

let age = 5;

while (age < 10) {
                    console.log("You’re age is less then 10")
                    age++;
                 };

console.log("You’re  now over 10");


// For Loops

for (age = 5; age < 12; age++) {
                                console.log("You’re age is less then 12");
                                };

console.log("You’re  now over 12");





