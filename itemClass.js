// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// -+-+ Name: Shawn Britten  -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// -+-+ Date: 01/23/2026     -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// -+-+ Purpose: class elements for menu items   -+-+-+-+-+-+-+-+
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

class Food {
   constructor(name, fats, prep, protein, toppings, sauce, quantity, cost) {
      this.name = name;
      this.fats = fats;
      this.prep = prep;
      this.protein = protein;
      this.toppings = toppings;
      this.sauce = sauce;
      this.quantity = quantity;
      this.cost = cost;
   } // end constructor

   setQuantity(newQuantity) {
      if (0 < newQuantity && newQuantity < 9)
         this.quantity = newQuantity;
      else
	 throw new Error('New quantity needs to be more than 0 and less than 10!');
   } // end setQuantity method

   price() {
      return this.cost * this.quantity;
   } // end price method
} // end food class

class Entree extends Food {
   // new constructor
   constructor(name, fats, prep, protein, toppings, sauce,
	sides, quantity, cost) {
      super(name, fats, prep, protein, toppings, sauce,
	quantity, cost);
      this.sides = sides;
   } // end constructor
} // end entree class


export default {
   Food,
   Entree
} // export package