console.log("Cheese.js loaded");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
  	"chedder": 0.89,
  	"swiss": 0.95,
  	"pJack": 1.23
  }

  // Augment the original object with another method
  maker.addCheese = function() {
    	if (cheeseChooser.value === "chedder") {
        return SandwichMaker.addTopping(cheesePrices.chedder);
      } else if (cheeseChooser.value === "swiss") {
        return SandwichMaker.addTopping(cheesePrices.swiss);
      } else if (cheeseChooser.value === "pJack") {
        return SandwichMaker.addTopping(cheesePrices.pJack);
      }
      console.log("something");
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);