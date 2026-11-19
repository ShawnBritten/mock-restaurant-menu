// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// -+-+ Name: Shawn Britten  -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// -+-+ Date: 02/03/2026     -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// -+-+ Purpose: Menu Functionality Header Page  -+-+-+-+-+-+-+-+
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

export function checked(list, title, name) {
   /* create a checked field with attributes name, checked, 
      and value. Return the result to the caller */

   // define and initialize variables
   var $result = $('<fieldset></fieldset>');
   var $legend = $('<legend></legend>');

   // assign a value to the legend and append it to the field
   $legend.text(title);
   $result.append($legend);

   // for each item in list itialize a checkbox and label then append it to page
   for (var i = 0; list.length > i; i++) {   // start for
      var $input = $('<input type="checkbox" />');   // define an empty input element
      var $label = $('<label></label>');   // define an empty label element

      // give each input a name, a check, and a value
      $input.attr('name', name);
      $input.attr('checked', 'checked');
      $input.attr('value', list[i]);

      // what is the label for and what content to display 
      $label.text(list[i]);
      $label.attr('for', list[i]);

      // append both to the result
      $result.append($input);
      $result.append($label);
   }   // end for

   return $result;  // return result
} // end checked
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export function radio(list, title, name) {
   /* create a radio field with attributes name, checked, 
      and value. Return the result to the caller */

   // define and initialize variables
   var $result = $('<fieldset></fieldset>');
   var $legend = $('<legend></legend>');

   // assign a value to the legend and append it to the form
   $legend.text(title);
   $result.append($legend);

   // for every item in list create a radio, a label, and append it the the field
   for (var i = 0; list.length > i; i++) { 	// start for
      var $input = $('<input type="radio" />'); // define an empty input element
      var $label = $('<label></label>');	// define a blank label
      $input.attr('name', name);		// give the attribute name a name

      if (i == 0)   // if this is the first item
         $input.attr('checked', 'checked');   // give it the attribute checked

      $input.attr('value', list[i]);   // give it the attribute value
      $label.attr('for', list[i]);     // give it the attribute for
      $label.text(list[i]);	       // assign the label it's value

      // append to the result
      $result.append($input);
      $result.append($label);
   }	// end for

   return $result;   // return result
} // end radioField
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export function select(list, title, name) {
   /* create a select field with attributes name, selected, 
      and value. Return the result to the caller */

   // define and initialize variables
   var $result = $('<fieldset></fieldset>');
   var $legend = $('<legend></legend>');
   var $select = $('<select></select>');

   // assign a value to the legend and append it to the field
   $legend.text(title);
   $result.append($legend);

   $select.attr('name', name);   // give select the attribute of name

   // for every item in list create an option and append it to field
   for (var i = 0; list.length > i; i++) {   // start for
      var $option = $('<option></option>');  // define an empty option element
      $option.attr('value', list[i]);	// give the option it's value
      $option.text(list[i]);   // give the option's text it's value

      if (i == 0)   // if the is the first option
         $option.attr('selected', 'selected');   // give it the attribute selected

      // append it to the select
      $select.append($option);
   }   // end for

   $result.append($select);   // append the select element to the result
   return $result;   // return result
} // end select
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
export function spinner() {
   /* create a spinner field and return the result to the caller */

   // define and initialize variables
   var $result = $('<fieldset></fieldset>');   // the resultant field
   var $tip = $('<span class="tip">value must be between 1 and 10<br /></span>');   // user tip

   // left controls
   var $buttonLeft = $('<button type="button" title="Decrease quantity" aria-controls="quantity" data-spinbutton-operation="decrement"></button>');
   $buttonLeft.append('<span aria-hidden="true">-</span>');

   // height controls
   var $buttonRight = $('<button type="button" title="Increase quantity" aria-controls="quantity" data-spinbutton-operation="increase"></button>');
   $buttonRight.append('<span aria-hidden="true">+</span>');

   // input text field
   var $input = ('<input class="quantity" role="spinbutton" type="text" size="4" inputmode="numeric" autocomplete="off" spellcheck="false" aria-valuemin="1" aria-valuemax="9" aria-valuenow="1" aria-inivalid="true" value="1" />');

   // append everything
   $result.append($tip).append('<legend>quantity</legend>').append($buttonLeft).append($input).append($buttonRight);

   return $result;   // return result
} // end spinner
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+