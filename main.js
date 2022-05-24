const title = document.querySelector('#title');
const author = document.querySelector('#author');
const form = document.querySelector('#add-form');
const bookSection = document.querySelector('.book-section');

const books = JSON.parse(localStorage.getItem('books')) || [];

// generate books dynamically
const generateBooks = ({ author, title, id }) => {
  const bookContainer = document.createElement('div');
  bookContainer.innerHTML = `
  <p>${title}</p>
  <p>${author}</p>
  <button id="${id}" class="remove-button" type="button")">Remove</button><br>
  <hr>  
  `;
  bookSection.appendChild(bookContainer);
};

// Add book
function addBook() {
  const book = {
    author: author.value,
    title: title.value,
    id: Date.now(),
  };
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  generateBooks(book);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (title.value && author.value) {
    addBook();
    form.reset();
  }
});

bookSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-button')) {
    const removedBotton = e.target;
    const removedBook = removedBotton.parentElement;
    const removedBookarr = books.filter((book) => book.id === Number(removedBotton.id));
    books.splice(books.indexOf(removedBookarr[0]), 1);
    localStorage.setItem('books', JSON.stringify(books));
    removedBook.remove();
  }
});

books.forEach(generateBooks);