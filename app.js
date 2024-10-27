const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const yearInput = document.querySelector('#year');
const submitBtn = document.querySelector("#submit-btn");
const library = document.querySelector('#library');
const form = document.querySelector("form");

const myLibrary = [];

class Book {
      readStatus = false;
    constructor(title, author, pages, year) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.year = year;
    //   this.readStatus = false;
    }

}

const book1 = new Book("The Hobbit", "Tolkien", 295, 1950);
myLibrary.push(book1);
const book2 = new Book("Way of Zen", "Alan Watts", 330, 1974);
myLibrary.push(book2);

// Book.prototype.readStatus = false;

function addBookToLibrary() {
    myLibrary.push(
        new Book(titleInput.value, authorInput.value, pagesInput.value, yearInput.value)
);
log();
}

const log = () => {
    library.textContent = "";
    

    myLibrary.forEach((book, index) => {

        const bookElement = document.createElement("div");
        bookElement.classList.add("book-details");
        
        const titleElement = document.createElement('div');
        titleElement.classList.add('book-title');
        titleElement.textContent = `Title: ${book.title}`;
        const authorElement = document.createElement('div');
        authorElement.classList.add('book-author');
        authorElement.textContent = `Author: ${book.author}`;
        const pagesElement = document.createElement('div');
        pagesElement.classList.add('book-pages');
        pagesElement.textContent = `Pages: ${book.pages}`;
        const yearElement = document.createElement('div');
        yearElement.classList.add('book-year');
        yearElement.textContent = `Year: ${book.year}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = "X";

        
        const readStatusElement = document.createElement('button');
        readStatusElement.classList.add('read-status');
        readStatusElement.textContent = "read";
        readStatusElement.style.backgroundColor = "red";
        readStatusElement.addEventListener("click", () => {
            console.log(book.readStatus);
            if (book.readStatus === false) {
                readStatusElement.style.backgroundColor = "green";
                book.readStatus = true;
                return;
            } 
            if (book.readStatus === true) {
                readStatusElement.style.backgroundColor = "red";
                book.readStatus = false;
            }
            

            
        })


        if (book.readStatus === false) {
            readStatusElement.style.backgroundColor = "red";
        } else {
            readStatusElement.style.backgroundColor = "green"
        }
        deleteBtn.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            log();
            // bookElement.remove();
            console.log(myLibrary);
        });
        
        bookElement.appendChild(titleElement);
        bookElement.appendChild(authorElement);
        bookElement.appendChild(pagesElement);
        bookElement.appendChild(yearElement);
        yearElement.appendChild(deleteBtn);
        yearElement.appendChild(readStatusElement);

        library.appendChild(bookElement);


    });
}

log();

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
        addBookToLibrary();
    } else {
        form.reportValidity();
    }
    
})