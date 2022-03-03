const add = document.querySelector('.add');
const makeCard = document.querySelector('.cards');

let library = [];
let j = 0;

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    const newTitle = document.querySelector('.title').value;
    const newAuthor = document.querySelector('.author').value;
    const newPages = document.querySelector('.pages').value;
    const addBook = new Book(newTitle, newAuthor, newPages);
    library.push(addBook)
    displayBooks()
}

add.addEventListener('click', addBookToLibrary)

function getValue() {
    const radio = document.querySelector('.yesno:checked').value;
    console.log(radio)
    return radio;
}

function displayBooks() {
    const newCard = document.createElement('div')
    newCard.style.background = 'white';
    newCard.style.height = '300px';
    newCard.style.width = '400px'
    newCard.style.borderRadius = '25px';
    newCard.style.margin = '30px';
    newCard.style.display = 'flex';
    newCard.style.justifyContent = 'center';
    newCard.style.alignItems = 'center';
    newCard.style.flexDirection = 'column';
    newCard.style.fontSize = '24px';
    newCard.style.letterSpacing = '1px';

    const titleContent = document.createTextNode(`Title: ${library[j].title}`)
    const line = document.createElement('br')
    newCard.appendChild(titleContent)
    newCard.appendChild(line)

    const authorContent = document.createTextNode(`Author: ${library[j].author}`)
    const line2 = document.createElement('br')
    newCard.appendChild(authorContent)
    newCard.appendChild(line2)

    const pageNumber = document.createTextNode(`Pages: ${library[j].pages}`)
    const line3 = document.createElement('br')
    newCard.appendChild(pageNumber)
    newCard.appendChild(line3)

    j += 1;

    for (i in library) {
        makeCard.appendChild(newCard)
        clearInputs();
    }
}

function clearInputs() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    document.querySelector('.pages').value = '';
}


