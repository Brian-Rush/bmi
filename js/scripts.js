var height = parseFloat(prompt("how tall are you in inches?"));
var weight = parseFloat(prompt("How much do you weight in pounds?"));

var bmi = function (height, weight){
alert ((weight / Math.pow (height, 2)) * 703);
};

bmi(height, weight);
