function goShopping(){     

  $('#js-shopping-list-form').submit(function(event) {
    // this stops the default form submission behavior
    event.preventDefault();
    //create a variable to target input text box
    const enterItem = $('#shopping-list-entry').val(); 
    //append enterItem + html at end of ul
    $('ul').append(`<li>
    <span class="shopping-item">${enterItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
    </li>`);
  //clear out input text box
  $('#shopping-list-entry').val("");
  });
  //Target toggle button, toggle checked class...Get the sibling(s) of each element in the set of matched elements... 
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
  });
  //Target delete button, delete parent li 
  $('.shopping-list').on('click', '.shopping-item-delete', function(event){
    $(this).closest('li').remove(); 
  });
}

$(goShopping);

