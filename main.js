// debugger;

let lordOfTheRings = {
  title: "Lord of the Rings",
  author: "J.R.R. Tolkien",
  checkedOut: false,
};

const Library = function () {
  const books = [];

  const checkOutBook = function (book) {
    if (books.includes(book)) {
      console.log(`${book.title} is checked out`);
      return (book.checkedOut = true);
    }
  };

  const addBook = function (book) {
    console.log(`${book.title} has been added to the library`);
    return books.push(book);
  };

  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
  };
};

// create book constructor
const Book = function (title, author, checkedOut) {
  const getAttribute = function (book, attribute) {
    console.log(book[attribute]);
  };

  const setAttribute = function (book, attribute, value) {
    book[attribute] = value;
  };

  return {
    title,
    author,
    checkedOut,
    getAttribute: getAttribute,
    setAttribute: setAttribute,
  };
};

const libraryInstance = Library(); // Create library instance first

libraryInstance.addBook(lordOfTheRings); // Add book to library
libraryInstance.checkOutBook(lordOfTheRings); // Check out the book
// libraryInstance.getAttribute(lordOfTheRings, "title"); // Get attribute of book

// Try adding the attributes to your Book object: -> setAttribute and getAttribute
