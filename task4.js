function checkNumberType(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(checkNumberType(67)); 
console.log(checkNumberType(-67));   
console.log(checkNumberType(0));   
console.log(checkNumberType(6.7));  
