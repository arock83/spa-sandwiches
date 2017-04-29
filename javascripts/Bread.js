console.log("Bread.js loaded");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
    "white": 0.89,
    "wheat": 0.95
  }

  // Augment the original object with another method
  maker.addBread = function() {
      if (breadChooser.value === "white") {
        return SandwichMaker.addTopping(breadPrices.white);
      } else if (breadChooser.value === "wheat") {
        return SandwichMaker.addTopping(breadPrices.wheat);
      }
      console.log("end of add bread")
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);