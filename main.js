$(function() {

    $('#js-shopping-list-form').on('submit',(function (event) {
    event.preventDefault(); 
    var newItem = $('#shopping-list-entry').val(); 
    $('.shopping-list').append(`<li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
    </li>`);
    }));
    

    
  $('ul').on('click', '.shopping-item-toggle', function (event) {  
      $(this).closest($('li')).find($('.shopping-item')).toggleClass('shopping-item__checked');
    });


  $('ul').on('click', '.shopping-item-delete', function (event) {
      $(this).closest($('li')).hide(); 
    });
  
  });









/*
A FEW OF MANY FALSE STARTS
/*
function showEnteredItems() {
    var x = ($('#shopping-list-entry')).value;
    document.getElementById($('shopping-item')).innerHTML = x;
  }
showEnteredItems(); 
*/ 

/*
$('.shopping-item-toggle').on('click', () => {
    $(event.target).closest($('.shopping-item').toggleClass('shopping-item__checked'));
});
*/

/*{
    $('#js-shopping-list-form').submit( () => {
            var txt1 = $("#shopping-list-entry")
        $('.shopping-list').append($('.li', 'txt1');
        event.preventDefault();
    }
    });


  $('.shopping-item-toggle').on('click', () => {
        $(event.target).closest($('li')).find($('.shopping-item')).toggleClass('shopping-item__checked');
        event.stopPropagation();
        console.log('1234');
    });


  if ('newItem' === 0) {
  $('#js-shopping-list-form').off('submit'),
  };

      ($('.shopping-item')).change,() => { 
    $('.shopping-item-toggle').on('click', () => {
        $(event.target).closest($('li')).find($('.shopping-item')).toggleClass('shopping-item__checked');
    });

    $('.shopping-item-delete').on('click', () => {
       $(event.target).closest($('li')).hide(); 
    });
  };


      $('.shopping-item-controls').on('click', 'shopping-item-toggle', () => {
      //event.preventDefault();
      $(event.target).closest($('li')).find($('.shopping-item')).toggleClass('shopping-item__checked');
  });

*/


