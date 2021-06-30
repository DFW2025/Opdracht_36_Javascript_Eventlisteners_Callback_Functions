// Oplossing Basis

let computerGetal;
let keuze;

let persoon = prompt("Welkom! Wat is je naam?", "Mr. Pinky Pants");
              alert ( "Hey " + persoon + "!    ...Hoe gaat het met jou vandaag?");

computerGetal = Math.floor(Math.random() * 26); { };

// Loop

while (keuze !== computerGetal) {
                                       
                                       keuze = parseInt( prompt("Voer een nummer in.."));
                                       alert("Je gok is: " + keuze);
                                       alert("Pssst het nummer is: " + computerGetal);

                                       if (keuze > computerGetal)      { alert("Helaas, je gok was te hoog.Probeer het opnieuw:") }
                                       else if (keuze < computerGetal) { alert ("Helaas, je gok was te laag.Probeer het opnieuw:") }
                                       else                            { alert("Goed geraden, het nummer was inderdaad: " + keuze);
                                                                         alert(  "We sluiten de game af. Bedankt voor het spelen, tot de volgende keer!") 
                                                                       };

                                 };

                                                                                                   
                  

//  Oplossing uitgebreid


let keuze;
let aantalKeren = 5;
let computerGetal;
let min = 0;
let max;

let naam = prompt("Welkom! Wat is je naam?", "Mr. Pinky Pants");
           alert("Hey " + naam + "!    ...Hoe gaat het met jou vandaag?");

max = parseInt(prompt("Tot welk nummer mag er geraden worden?"));
      alert("Je hebt nu 5 pogingen om het getal te raden. Het getal ligt tussen 0 en " + max + ". Heel veel succes!");

computerGetal = Math.floor(Math.random() * (max - min)) + min;

// Loop 

while (keuze !== computerGetal) {
                                        if (aantalKeren < 1) {
                                                                   alert("Helaas, je pogingen zijn op. Je hebt verloren. We beginnen weer opnieuw met een nieuw nummer! Het nummer ligt nog steeds tussen 0 en " + max + ".");
                                                                   aantalKeren = 5;
                                                                   computerGetal = Math.floor(Math.random() * (max - min)) + min;
                                                                   keuze = parseInt( prompt("Voer een nummer in.."));
                                                                   alert("Je gok is: " + keuze);
                                                                   alert("Pssst het nummer is: " + computerGetal);
                                                               }

                                       else                  {
                                                                  keuze = parseInt(prompt("Voer een nummer in.."));
                                                                  alert("Je gok is: " + keuze);
                                                                  alert("Pssst het nummer is: " + computerGetal);

                                                                if (keuze > computerGetal) { aantalKeren--;
                                                                                                            if (aantalKeren < 1) {
                                                                                                                                   alert("Dit was je laatste poging.");
                                                                                                                                 } 
                                                                                                            else                 {
                                                                                                                                   alert("Helaas, je gok was te hoog. Je hebt nog: " + aantalKeren + " keuze(s) over. Probeer het opnieuw:");
                                                                                                                                 }  
                                                                                           }   

                                                                else if (keuze < computerGetal) {   aantalKeren--;
                                                                                                            if (aantalKeren < 1) {
                                                                                                                                   alert("Dit was je laatste poging.");
                                                                                                                                  }
                                                                                                            else                 {
                                                                                                                                  alert("Helaas, je gok was te laag. Je hebt nog: " + aantalKeren + " keuze(s) over. Probeer het opnieuw:");
                                                                                                                                 } 
                                                                                                 }
                                                                 else  {
                                                                        alert("Goed geraden, het nummer was inderdaad: " + keuze);
                                                                        alert(  "We sluiten de game af. Bedankt voor het spelen, tot de volgende keer!");
                                                                        }
                                                                


                                                                }
                                                                 

                                 };

                                                                                                     
