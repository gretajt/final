function renderBooks(BOOKS) {

    
    
};

// listen for when user types in filter field

searchInput.addEventListener("input", function() {

    // get user input
    var userInput = searchInput.value;
    // make input lower case
    var lowercaseUserInput = userInput.toLowerCase();

    // find movies the match user input
    var filtered_books = BOOKS.filter(isBookFound);


    // update movie table with new list
    renderMovies(filtered_books);


});
