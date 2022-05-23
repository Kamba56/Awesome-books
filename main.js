const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addButton = document.querySelector('#add-button');
const bookSection = document.querySelector('.book-section');
let removeButton;

let books = [];

function addBook() {
  let book = {
    title: title.value,
    author: author.value,
    id: Date.now()
  };
  books.push(book);
}

addButton.addEventListener('click', () => {
  addBook();
  generateBooks();
  removeButton = document.querySelector('.remove-button');
});

// generate books
const generateBooks = () => {
  books.forEach((book) => {
    const bookContainer = document.createElement('div');
    bookContainer.innerHTML = `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button class="remove-button" type="button" onclick="removeBooks(${book.id})">Remove</button><br>
    <hr>  
    `;
    bookSection.appendChild(bookContainer);
  });
}

// remove books
const removeBooks = (id) => {
  console.log(id)
  let filterBook = books.filter(book => book.id === id);
  console.log(filterBook.author);
}
