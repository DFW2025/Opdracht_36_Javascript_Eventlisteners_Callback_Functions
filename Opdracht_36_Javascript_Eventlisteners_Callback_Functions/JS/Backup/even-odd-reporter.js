// Javascript

// Even Odd Reporter with "FOR" Loop


const evenOdd = function (number) { 
                                    if (number % 2 == 0 ) { return "even" }
                                    else { return "oneven" }
                                    
                                  };

for (number = 0; number <= 20; number++) {
    console.log("Number " + number + " = " + evenOdd (number));
};

console.log("All numbers have been looped..");


