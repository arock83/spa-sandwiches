console.log("Meat.js loaded");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	"ham": 0.89,
  	"turkey": 0.95,
  	"steak": 1.23
  }

  // Augment the original object with another method
  maker.addMeat = function() {
    	if (meatChooser.value === "ham") {
        return SandwichMaker.addTopping(meatPrices.ham);
      } else if (meatChooser.value === "turkey") {
        return SandwichMaker.addTopping(meatPrices.turkey);
      } else if (meatChooser.value === "steak") {
        return SandwichMaker.addTopping(meatPrices.steak);
      }
      console.log("something");
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);