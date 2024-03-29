const add = document.querySelector('.add');
const makeCard = document.querySelector('.cards');

let library = [];
let j = 0;


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {
    const newTitle = document.querySelector('.title').value;
    const newAuthor = document.querySelector('.author').value;
    const newPages = document.querySelector('.pages').value;
    const radio = document.querySelector('.yesno:checked').value;
    const addBook = new Book(newTitle, newAuthor, newPages, radio);
    library.push(addBook)
    displayBooks()
}



function clearInputs() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    document.querySelector('.pages').value = '';
    const yes = document.querySelector('#yes');
    const no = document.querySelector('#no');
    yes.checked = false;
    no.checked = false;
}


add.addEventListener('click', addBookToLibrary)

function displayBooks() {
    // Creating cards
    const newCard = document.createElement('div')
    newCard.classList.add('newCard')

    // Adding text to card
    const titleContent = document.createTextNode(`Title: ${library[j].title}`)
    const line = document.createElement('br')
    const line2 = document.createElement('br')
    newCard.appendChild(titleContent)
    newCard.appendChild(line)
    newCard.appendChild(line2)

    const authorContent = document.createTextNode(`Author: ${library[j].author}`)
    const line3 = document.createElement('br')
    const line4 = document.createElement('br')
    newCard.appendChild(authorContent)
    newCard.appendChild(line3)
    newCard.appendChild(line4)

    const pageNumber = document.createTextNode(`Pages: ${library[j].pages}`)
    const line5 = document.createElement('br')
    const line6 = document.createElement('br')
    newCard.appendChild(pageNumber)
    newCard.appendChild(line5)
    newCard.appendChild(line6)


    // Creating read or unread button
    const newButton = document.createElement('button')
    btn(newButton)
    
    newCard.appendChild(newButton)
    const line7 = document.createElement('br')
    newCard.appendChild(line7)

    // Creating delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.textContent = 'Delete';
    newCard.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function(){
        newCard.remove()
    })

    
    newButton.addEventListener('click', function(){
        if (newButton.textContent === 'Read'){
            newButton.style.backgroundColor = '#900000';
            newButton.style.color = 'white';
            newButton.textContent = 'Unread';
        } else if (newButton.textContent === 'Unread') {
            newButton.style.backgroundColor = '#47D65A';
            newButton.style.color = 'black';
            newButton.textContent = 'Read';
        }
    })

    j += 1;  //Used to iterate through library

    for (i in library) {
        makeCard.appendChild(newCard)
        radioBtn = '';
        clearInputs()
    }
}



function btn(newButton) {
    radioBtn = document.querySelector('.yesno:checked').value;
    if (radioBtn === 'Yes'){
        newButton.classList.add('read')
        newButton.textContent = 'Read';
    }   else if(radioBtn === 'No') {
        newButton.classList.add('unread')
        newButton.textContent = 'Unread';
    }
}
