const title = document.querySelector('#title');
const author = document.querySelector('#author');
const form = document.querySelector('#add-form');
const bookSection = document.querySelector('.book-section');

// const books = JSON.parse(localStorage.getItem('books')) || [];

// object class
class BooksTemplate{
  books = [];
  constructor() {

  };
  // methods
  generateBooks = ({ author, title, id }) => {
    const bookContainer = document.createElement('div');
    bookContainer.innerHTML = `
    <p>${title}</p>
    <p>${author}</p>
    <button id="${id}" class="remove-button" type="button")">Remove</button><br>
    <hr>  
    `;
    bookSection.appendChild(bookContainer);
  };

  addBook() {
    const book = {
      author: author.value,
      title: title.value,
      id: Date.now(),
    };
    this.books.push(book);
    console.log(this.books);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.generateBooks(book);
  };

  removeBook(removedBotton) {
    const removedBook = removedBotton.parentElement;
    const removedBookarr = this.books.filter((book) => book.id === Number(removedBotton.id));
    this.books.splice(this.books.indexOf(removedBookarr[0]), 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    removedBook.remove();
  }
}
// generate books dynamically
// const generateBooks = ({ author, title, id }) => {
//   const bookContainer = document.createElement('div');
//   bookContainer.innerHTML = `
//   <p>${title}</p>
//   <p>${author}</p>
//   <button id="${id}" class="remove-button" type="button")">Remove</button><br>
//   <hr>  
//   `;
//   bookSection.appendChild(bookContainer);
// };

// Add book
// function addBook() {
//   const book = {
//     author: author.value,
//     title: title.value,
//     id: Date.now(),
//   };
//   books.push(book);
//   localStorage.setItem('books', JSON.stringify(books));
//   generateBooks(book);
// }
const bookObj = new BooksTemplate();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (title.value && author.value) {
    bookObj.addBook();
    form.reset();
  }
});

bookSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-button')) {
    const removedBotton = e.target;
    bookObj.removeBook(removedBotton);

    // const removedBook = removedBotton.parentElement;
    // const removedBookarr = books.filter((book) => book.id === Number(removedBotton.id));
    // books.splice(books.indexOf(removedBookarr[0]), 1);
    // localStorage.setItem('books', JSON.stringify(books));
    // removedBook.remove();
  }
});

// bookObj.books.forEach(bookObj.generateBooks);