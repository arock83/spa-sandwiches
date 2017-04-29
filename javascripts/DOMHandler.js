console.log("DOMHandler.js loaded");

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");
var priceTotal = document.getElementById("priceTotal");
var breadChooser = document.getElementById("bread-chooser");
var cheeseChooser = document.getElementById("cheese-select");
var condimentChooser = document.getElementById("condiment-select");
var veggieChooser = document.getElementById("veggie-select");
var priceTotal = document.getElementById("priceTotal");
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  console.log(selectedTopping);
  SandwichMaker.addMeat(selectedTopping);
  // Determine the price of the topping chosen
  
  // Add the topping to the SandwichMaker to increase the total price
});

breadChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	console.log(selectedTopping);
	SandwichMaker.addBread(selectedTopping);
});

cheeseChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	console.log(selectedTopping);
	SandwichMaker.addCheese(selectedTopping);
});

condimentChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value
	console.log(selectedTopping);
	SandwichMaker.addCondiment(selectedTopping);
});

veggieChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value
	console.log(selectedTopping);
	SandwichMaker.addVeggie(selectedTopping);
});