console.log("Condiment.js loaded");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices = {
  	"mustard": 0.89,
  	"pickle": 0.95,
  	"shiracha": 1.23
  }

  // Augment the original object with another method
  maker.addCondiment = function() {
    	if (condimentChooser.value === "mustard") {
        return SandwichMaker.addTopping(condimentPrices.mustard);
      } else if (condimentChooser.value === "pickle") {
        return SandwichMaker.addTopping(condimentPrices.pickle);
      } else if (condimentChooser.value === "shiracha") {
        return SandwichMaker.addTopping(condimentPrices.shiracha);
      }
      console.log("something");
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);