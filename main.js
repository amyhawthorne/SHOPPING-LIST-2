$(document).ready(() => {
    $('#js-shopping-list-form').submit(function (event) {
        $('.li').append($('#shopping-list-entry'));
        event.preventDefault();
        });
    },
    $('.shopping-item-toggle').toggleClass( shopping-item__checked, addOrRemove));

    $('.shopping-item-delete').on('click', () => {
       $(event.target).closest($('.shopping-item')).hide(); 
    });

  



