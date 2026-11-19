// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// -+-+ Name: Shawn Britten  -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// -+-+ Date: 01/23/2026     -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// -+-+ Purpose: Create a form with optional ingredients,  -+-+-+
// -+-+          submit form and create a class from the form, -+
// -+-+		 create a data structure to hold each item.  -+-+
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
import * as field from './fieldElements.js'

export default function createItemForm(item) {
   // define and initialize variables
   var $result = $('<form></form>');	// the resultant form
   var $header = $('<h3></h3>');	// the header

   $header.text(item.name);		// header displays the item name
   $result.append($header);		// append header to form

   // create the fields with inferential information and append it to the form
   $result.append(field.radio(item.fats, 'cooking fats', 'fats'));
   $result.append(field.select(item.prep, 'preperation', 'prep'));
   $result.append(field.select(item.protein, 'protein', 'protein'));
   $result.append(field.checked(item.toppings, 'toppings', 'toppings'));
   $result.append(field.radio(item.sauce, 'sauce', 'sauce'));

   // if sides variable exists
   if (item.sides)
      $result.append(field.select(item.sides, 'sides', 'sides'));

   // define and initialize the quantity and costs controls
   var $textField = field.spinner();
   var $price = $('<span class="cost"></span>');
   $price.text('$' + item.cost);

   $textField.append($price);	// append the cost to the quantity field
   $result.append($textField);	// append the quantity field to the result

   // add and remove buttons
   var $add = $('<button class="add">add to cart</button>');
   var $remove = $('<span class="remove">X</span>');
   $header.before($remove);	// place the remove button at the top of the page
   $result.append($add);	// place the add button at the bottom

   //  form events
   // click events
   $remove.on('click', function() {
      $(this).parent().remove();
   });

   $textField.children('button[title="Decrease quantity"]').on('click', function() {
      if (0 < item.quantity - 1) {
         item.quantity--;
         $(this).next().prop('value', item.quantity);
         $price.text('$' + item.price());
      }
   });

   $textField.children('button[title="Increase quantity"]').on('click', function() {
      if (9 >= item.quantity + 1) {
         item.quantity++;
         $(this).prev().prop('value', item.quantity);
         $price.text('$' + item.price());
      }
   });

   // change events
   $textField.children('input').on('change', function() {
      if (0 < $(this).val() && $(this).val() <= 9) {
         item.quantity = $(this).val();
         $(this).prop('value', item.quantity);
         $price.text('$' + item.price());
      }
   });

   // blur events
   $textField.children('input').on('blur', function() {
      if (0 >= $(this).val() || $(this).val() > 9 || !($.isNumberic($(this).val())))
	 $(this).prop('value', item.quantity);
   });

   return $result;	// return result
}   // end createItemForm