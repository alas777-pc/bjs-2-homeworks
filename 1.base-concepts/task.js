"use strict";
function solveEquation(a,b,c) {
  let arr;
  let d = Math.pow(b, 2) - (4 * a * c);
  let x1 = (-b + Math.sqrt(d)) / (2 * a);
  let x2 = (-b - Math.sqrt(d)) / (2 * a);

  if (d < 0) {
    arr = [];
  } else if (d == 0) {
    let x = -b / (2 * a)
    arr = [x];
  } else {
    
    arr = [x1, x2];
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
      return false;
  }

  
  let monthlyPercent = (percent / 100) / 12;

  
  let principal = amount - contribution;

 
  if (principal <= 0) {
      return 0;
  }

  
  let monthlyPayment = principal * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));

  
  let totalAmount = monthlyPayment * countMonths;

  
  return Number(totalAmount.toFixed(2));
}