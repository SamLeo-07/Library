const lib = document.querySelector(".lib");
const add = document.querySelector("#open-popup");
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const popupOverlay = document.querySelector('.popupOverlay');
const submit = document.querySelector('.submit');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const form = document.querySelector('form');



const myLibrary = [];

function Books(title,author,pages,read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary(title, author, pages, read) {
  const newBook = new Books(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  lib.innerHTML = ""; // Clear existing books

  myLibrary.forEach((book, index) => {
    addbook(book, index); // Add each book card with updated index
  });
}



function addbook(book, index){

    const card = document.createElement('div');
    card.className = 'card'
  
    let h1 = document.createElement('h1');
    h1.textContent = book.title
    card.appendChild(h1);
    
    let p = document.createElement('p');
    p.textContent = ` Written by: ${book.author}`
    card.appendChild(p);
    
    let p2 = document.createElement('p');
    p2.textContent = ` No. of Pages: ${book.pages}`
    card.appendChild(p2);
  
    let p3 = document.createElement('p');
    p3.textContent = ` Have Read: ${book.read ? 'Yes' : 'No'}`;
    card.appendChild(p3);
  
    let del = document.createElement('button');
    del.className = 'delete';
    del.textContent = 'Delete';
    del.setAttribute("data-index", index); 
    card.appendChild(del);
  
    lib.appendChild(card);

    popup.style.display = 'none';
    popupOverlay.style.display = 'none';

    form.reset();

}

lib.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const index = parseInt(e.target.dataset.index, 10);
    const valid = confirm('are you sure?')
    
    if (valid && !isNaN( index)) {
      myLibrary.splice(index, 1); // Remove book from array
      displayBooks(); // Refresh book list
    } else {
      console.error("Invalid index:", index);
    }
  }
});


  form.addEventListener('submit', (event) => { 
    event.preventDefault();
    
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const bookPages = pagesInput.value;
    const bookRead = readInput.checked;

    console.log(readInput.checked);

  // Add the book to the library and display it
  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
  
    displayBooks();
  

  });
  




  add.addEventListener('click',() => {
    popup.style.display = 'block';
    popupOverlay.style.display = 'block';
  } )


  close.addEventListener('click', () => {
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
  });


  window.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
      popup.style.display = 'none';
      popupOverlay.style.display = 'none';
    }
  });



