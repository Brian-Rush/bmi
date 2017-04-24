var height = parseFloat(prompt("how tall are you in inches?"));
var weight = parseFloat(prompt("How much do you weight in pounds?"));

var bmi = function (height, weight){
alert ((weight / Math.pow (height, 2)) * 703);
};

bmi(height, weight);

//Calculate Celcius/ fahrenheit convertion

var celcius = parseFloat(prompt("What is the temperature outside in Celcius"));

var fahrenheit = function(celcius){
	alert("the temperature in Celcius is " + (celcius*(9/5)+32) + " C.");
};

fahrenheit(celcius);
