const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addButton = document.querySelector('#add-button');
const removeButton = document.querySelectorAll('.remove-button')

const books = [];

function addBook() {
  let book = {
    title: title.value,
    author: author.value,
    id: new Date().curre
  };

  books.append(book);
}
