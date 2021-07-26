
// jQuery selector: 
// *'$' in the variable name is just to signify that it contains a jQuery object
// $() is needed for the actual query

// jquery object has special powers that is not applicable to standard js object or html element.


var $li = $('li')

console.log($li)


let $lastLi = $li[$li.length - 1]

console.log($lastLi)

// $li.eq(1).fadeOut();

//Changin css
// $('li').css( { color: 'green', 'font-weight': 'bold' } );
$('li').css( { color: 'green', fontWeight: 'bold' } );


$('p').css('font-size', '30px');

//Practice: gettting last item
//-making sure that item has jquery wrap
//-$lastLi is not a jquery object
// $li.eq($li.length-1).css( { backgroundColor: 'orange' });
//is the same as...
$li.last().css( { backgroundColor: 'orange' });


//jquery commands can be chained with regualr js methods
// Change our <p> tag's content and color
// $('p').html('Awesome things jQuery can do:').css('background-color', 'peachpuff');
// same as...
// Change our <p> tag's content and color
$('p')
  .html('Awesome things jQuery can do:')
  .css('background-color', 'peachpuff');