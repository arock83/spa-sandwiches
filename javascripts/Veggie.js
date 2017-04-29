console.log("Veggie.js loaded");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var vegPrices = {
  	"lettuce": 0.89,
  	"guac": 0.95
  }

  // Augment the original object with another method
  maker.addVeggie = function() {
    	if (veggieChooser.value === "lettuce") {
        return SandwichMaker.addTopping(vegPrices.lettuce);
      } else if (veggieChooser.value === "guac") {
        return SandwichMaker.addTopping(vegPrices.guac);
      } 
      console.log("something");
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);