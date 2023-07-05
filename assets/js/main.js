"use strict";
//Steuerrechner//section//tax-input
const taxCalculator = document.querySelector(".tax-calculator")
console.log(taxCalculator);
//nettogross//grosstonet
const netradio = document.querySelector(".net-to-gross");
const grossradio = document.querySelector(".gross-to-net");
//input//19+7
const taxRate19 = document.querySelector(".tax-rate-19");
const taxRate7 = document.querySelector("tax-rate-7");
//button
const numberButton = document.querySelector(".number-button");
//output
const taxAmount = document.querySelector(".tax-amount");
const grossTaxAmount = document.querySelector(".tax-amount");
const netTaxAmount = document.querySelector(".net-tax-amount");

//function
function changeRadio() {
    if (netradio.checked) {
        
    } else {
        
    }
}
 function calc(event) {
    event.preventDefault()
    
 }