const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addButton = document.querySelector('#add-button');
const bookSection = document.querySelector('.book-section');
let removeButton = [];

let books = [];

function addBook() {
  let book = {
    title: title.value,
    author: author.value,
    id: Date.now()
  };
  books.push(book);
  generateBooks(book.title, book.author, book.id);
  button = document.getElementById(book.id.toString());
  removeButton.push(button);
  console.log(removeButton);
}

addButton.addEventListener('click', () => {
  addBook();
  clearInputs();
});

// generate books
const generateBooks = (title, author, id) => {
  const bookContainer = document.createElement('div');
  bookContainer.innerHTML = `
  <p>${title}</p>
  <p>${author}</p>
  <button class="remove-button" type="button" id="${id}" onclick="removeBooks(${id})">Remove</button><br>
  <hr>  
  `;
  bookSection.appendChild(bookContainer);
}

const clearInputs = () => {
  title.value = "";
  author.value = "";
}

// remove books
const removeBooks = (id) => {
    let filterBook = books.filter(book => book.id === id);
    books.pop(filterBook[0]);
    console.log(books);
}
