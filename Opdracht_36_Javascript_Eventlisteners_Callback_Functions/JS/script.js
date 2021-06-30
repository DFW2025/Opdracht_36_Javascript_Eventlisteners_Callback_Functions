// Javascript

// Eventlisteners

// Selector
const btn = document.querySelector("#mybutton");
// Function
const btnAlert = () => {alert("Button clicked!!");}
// Eventlisterner Click
btn .addEventListener("click", btnAlert);

// Selector
const btn2 = document.querySelector("#mybutton2");
const background = document.querySelector("main")
// Function
const btnBackground = () => { background.classList.toggle("red-background"); };
// Eventlisterner Click
btn2.addEventListener("click", btnBackground);