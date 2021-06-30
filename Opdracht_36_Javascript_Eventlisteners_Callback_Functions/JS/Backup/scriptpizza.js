// Javascript

// Part 1 Adding a function to make a Pizza

const makePizza = function () {
                                console.log("Stap1: ", "Maak de pizzabodem van deeg");
                                console.log("Stap2: ", "Smeer de pizzabodem in met tomatensaus");
                                console.log("Stap3: ", "Snij de champignons in kleine stukjes");
                                console.log("Stap4: ", "Snij de paprika's in lange slierten");
                                console.log("Stap5: ", "Leg de paprika's en champignons op de pizzabodem in de tomatensaus");
                                console.log("Stap6: ", "Bedek de pizza met fijngeraspte kaas");
                                console.log("Stap7: ", "Bak de pizza op 220 graden voor 10 min");
};

// Run on node, no result.....

// Adding the code to call the function

makePizza();


// Adding the code to call the function 3x

for (var i = 0; i < 3; i++) { makePizza(); }

// Part 2 Adding a function to make Sushi

const makeSushi = function () {
    console.log("Stap1: ", "Kook de rijst tot hij genoeg plakt ");
    console.log("Stap2: ", "Plak de rijst op een bamboo matje");
    console.log("Stap3: ", "Snij de verse vis in kleine stukjes");
    console.log("Stap4: ", "Snij de komkommer in korte stukjes");
    console.log("Stap5: ", "Leg de verse vis en komkommer op de rijst op het matje");
    console.log("Stap6: ", "Rol het matje dicht en druk stevig aan");
    console.log("Stap7: ", "Rol het matje uit en snij deze in stukken van 10 cm");
};


// Adding the code to call the function

makeSushi();

// Adding the code to call the function make pizza 2x  and to make sushi 3x

for (var p = 0; p < 2; p++) { makePizza(); }
for (var s = 0; s < 3; s++) { makeSushi(); }