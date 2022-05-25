const title = document.querySelector('#title');
const author = document.querySelector('#author');
const form = document.querySelector('#add-form');
const bookSection = document.querySelector('.book-section');
const bookListSection = document.querySelector('#book-list');
const formSection = document.querySelector('#form-section');
const contactSection = document.querySelector('#contact');
const formLink = document.querySelector('#form-link');
const bookLink = document.querySelector('#book-link');
const contactLink = document.querySelector('#contact-link');
const currentDate = document.querySelector('#todays-date');
const emptyList = document.querySelector('#empty-list');

// object class
class BooksTemplate {
  books = [];

  check() {
    if (localStorage.getItem('books')) {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
  }

  // methods
  generateBooks({ author, title, id }) {
    const bookContainer = document.createElement('div');

    bookContainer.classList.add('book-div');
    bookContainer.innerHTML = `
    <p>"${title}" by ${author}</p>
    <button id="${id}" class="remove-button" type="button")">Remove</button>  
    `;
    bookSection.appendChild(bookContainer);
  };

  addBook() {
    const book = {
      author: author.value,
      title: title.value,
      id: Date.now(),
    };
    this.check();
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.generateBooks(book);
  }

  removeBook(removedBotton) {
    const removedBook = removedBotton.parentElement;
    const removedBookarr = this.books.filter((book) => book.id === Number(removedBotton.id));
    this.books.splice(this.books.indexOf(removedBookarr[0]), 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    removedBook.remove();
  }
}

const bookObj = new BooksTemplate();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (title.value && author.value) {
    bookObj.addBook();
    form.reset();
  }
});

const isEmpty = () => {
  if (bookObj.books.length === 0 ) {
    emptyList.style.display = 'block';
  } else {
    emptyList.style.display = 'none';
  }
} 

bookSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-button')) {
    const removedBotton = e.target;
    bookObj.removeBook(removedBotton);
    isEmpty();
  }
});

bookObj.check();
bookObj.books.forEach(bookObj.generateBooks);
isEmpty();

bookLink.addEventListener('click', (e) => {
  e.preventDefault();
  bookListSection.style.display = 'block';
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
  isEmpty();
});

formLink.addEventListener('click', (e) => {
  e.preventDefault();
  bookListSection.style.display = 'none';
  formSection.style.display = 'block';
  contactSection.style.display = 'none';
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  bookListSection.style.display = 'none';
  formSection.style.display = 'none';
  contactSection.style.display = 'block';
});

const todaysDate = new Date();
currentDate.innerHTML = todaysDate;