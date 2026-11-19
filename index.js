// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// -+-+ Name: Shawn Britten  -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// -+-+ Date: 01/12/2026     -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// -+-+ Program: Event Listeners   -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
import search from './data/data.js'
import course from './1.5.2/itemClass.js'
import form from './1.5.3/itemForm.js'

document.addEventListener('DOMContentLoaded', () => {

   (() => {
       const el_span = document.createElement('span');
       const span_text = document.createTextNode('click to add to cart');
       el_span.appendChild(span_text);
       el_span.className = 'hint';
       $('#menu figure').children('p').prepend(el_span);
   })();

   $('#menu figure').on('mouseenter', function(e) {
      $(e.delegateTarget).animate({
         bottom: '+=20'
      }, {
         duration: 'fast',
         ease: 'swing',
         fail: function() {
	    $(this).css('bottom', 0.0);
	 }
      });

      $(e.currentTarget).children('p').css('opacity', '1');
      $(e.currentTarget).children('p').hide().fadeIn('slow');
   })
   .on('mouseleave', function(e) {
      $(e.delegateTarget).children('p').animate({
         opacity: 0.0
      }, 'fast', 'swing');

      $(e.currentTarget).animate({
         bottom: '-=20'
      }, {
         duration: 'fast',
         ease: 'swing',
         fail: function() {
	    $(this).css('bottom', 0.0);
	 }
      });
   });

   $('#menu a').on('click', function(e) {
      e.preventDefault();
      let item = new course.Entree
      Object.assign(item, search(e.currentTarget.firstChild.id))
      $(e.currentTarget).parent().after(form(item).attr('class', e.currentTarget.firstChild.className));
   });

});