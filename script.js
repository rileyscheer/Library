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
    // Creating and styling cards
    const newCard = document.createElement('div')
    newCard.style.background = 'white';
    newCard.style.height = '310px';
    newCard.style.width = '400px'
    newCard.style.borderRadius = '25px';
    newCard.style.margin = '30px';
    newCard.style.display = 'flex';
    newCard.style.justifyContent = 'center';
    newCard.style.alignItems = 'center';
    newCard.style.flexDirection = 'column'; 
    newCard.style.fontSize = '24px';
    newCard.style.letterSpacing = '1px';
    newCard.style.boxShadow = '0px 0px 20px';
    newCard.style.fontWeight = '500';

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
    newButton.style.width = '200px';
    newButton.style.height = '50px';
    newButton.style.borderRadius = '25px';
    newButton.style.border = 'solid black 2px';
    newButton.style.fontWeight = '500';
    newButton.style.color = 'black';
    btn(newButton)
    
    newCard.appendChild(newButton)
    const line7 = document.createElement('br')
    newCard.appendChild(line7)

    // Creating delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.style.width = '90px';
    deleteBtn.style.height = '35px';
    deleteBtn.style.background = 'black';
    deleteBtn.style.color = 'white';
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.borderRadius = '15px';
    deleteBtn.style.border = 'solid 1px black';
    deleteBtn.style.fontSize = '16px';

    newCard.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function(){
        newCard.remove()
    })

    newButton.addEventListener('click', function(){
        if (newButton.textContent === 'Read'){
            newButton.style.background = '#900000';
            newButton.style.color = 'white';
            newButton.textContent = 'Unread';
        } else if (newButton.textContent === 'Unread') {
            newButton.style.background = '#47D65A';
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
        newButton.style.background = '#47D65A';
        newButton.textContent = 'Read';

        newButton.onmouseover = function() {
            newButton.style.background = '#900000';
            newButton.style.color = 'white';
        }

        newButton.onmouseout = function() {
            newButton.style.background = '#47D65A';
            newButton.style.color = 'black';
        }
    }   else if(radioBtn === 'No') {
        newButton.style.background = '#900000';
        newButton.style.color = 'white';
        newButton.textContent = 'Unread';

        newButton.onmouseover = function() {
            newButton.style.background = '#47D65A';
            newButton.style.color = 'black';
        }

        newButton.onmouseout = function() {
            newButton.style.background = '#900000';
            newButton.style.color = 'white';
        }
    }
}
