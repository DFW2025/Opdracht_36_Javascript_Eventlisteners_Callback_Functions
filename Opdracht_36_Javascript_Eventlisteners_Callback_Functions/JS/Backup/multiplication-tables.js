// Javascript

// Table of 9 with "FOR" Loop

console.log("Dit is de tafel van 9......");

const tafel = function (number) {
                                     const tafelVan9 = number * 9;
                                     return tafelVan9;
                                 };


for (number = 0; number <= 10; number++) {
    console.log("Tafel van 9 ===> " + number + " x 9 = " + tafel (number));
};


// Multiplication tables  (Bonus!!)  -->  Nested "FOR" loop....

console.log("Dit zijn de tafels van 1 t/m 10......");

const tafels = function (number1, number2) {
                                    const tafels = number1 * number2;
                                    return tafels;
};


for (number1 = 0; number1 <= 10; number1++) { for (number2 = 0; number2 <= 10; number2++) 
                                            { console.log ("Tafels 1 t/m 10 ===> " + number1 + " x " + number2 + " = " + tafels (number1, number2))}
                                            
                                             };


