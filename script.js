const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const addBook = document.querySelector('.addBook');
const form = document.querySelector('form');
let input = document.querySelectorAll("input");

let library = [];

form.addEventListener('submit', function(){
    const newDiv = document.createElement('div');
    newDiv.classList.add('book')
    books.appendChild(newDiv);

    //Book information setup
    let bookTitle = document.createElement('div')
    bookTitle.classList.add('bookTitle')
    newDiv.appendChild(bookTitle);
    let bookAuthor = document.createElement('div')
    bookAuthor.classList.add('bookAuthor')
    newDiv.appendChild(bookAuthor)
    let bookPages = document.createElement('div')
    bookPages.classList.add('bookPages')
    newDiv.appendChild(bookPages)
    let bookReadStatus = document.createElement('div')
    bookReadStatus.classList.add('bookReadStatus')
    newDiv.appendChild(bookReadStatus)

    //Delete button setup
    let deleteBookDiv = document.createElement('div');
    deleteBookDiv.classList.add('deleteBook');
    newDiv.appendChild(deleteBookDiv);
    
    let minusImg = document.createElement('img');
    minusImg.src = './svgs/minus.svg';
    deleteBookDiv.appendChild(minusImg);

    deleteBookDiv.addEventListener('click', function(){
        newDiv.remove();
    });
    
    //Book information display
    let newBook = new Book(input[0].value, input[1].value, input[2].value, input[3].value)

    newDiv.querySelector('.bookTitle').textContent = 'Book Title: ' + input[0].value;
    newDiv.querySelector('.bookAuthor').textContent = 'Book Author: ' + input[1].value;
    newDiv.querySelector('.bookPages').textContent = 'Book Pages: ' + input[2].value;
    newDiv.querySelector('.bookReadStatus').textContent = 'Read Status: ' + input[3].value;
        
    for(i in input){
        input[i].value = '';
    }
    input[3].checked = false;

    
});



function Book(title, author, pages, readStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}