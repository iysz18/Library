// Initial function which waits for the DOM to complete load
document.addEventListener("DOMContentLoaded", () => {

    // Array to store books and display them when page loads 
    const myLibrary = new Array();
    
    // Object constructor to create new book instances
    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    };

    /* Function to create the Book with all the provided 
       info and adding it to the myLibrary array 
    */ 
    function addBookToLibrary(title, author, pages, readStatus) {
        const newBook = new Book(title, author, pages, readStatus);
        myLibrary.push(newBook);
        myLibrary.forEach(book => console.log(book));
    };

    // Render books function which will loop over the myLibrary array and create new cards for each book
    function renderBook() {
        const bookshelf = document.querySelector(".bookshelf-container");

        // before creating and rendering each book's info card, remove all of them to ensure no duplicates
        if (bookshelf.hasChildNodes(z)) {
            // Convert the childNodes into an array to safely loop over and remove.
            Array.from(bookshelf.childNodes).forEach(card => {
                bookshelf.removeChild(card);
            });
        }


    }

    // Referencing each button needed to create a book
    const openDialogBtn = document.querySelector(".btn-open-dialog");
    // const closeDialogBtn = document.querySelector(".btn-close-dialog");
    const addBookBtn = document.querySelector(".btn-add-book");
    const dialogWindow = document.querySelector(".dialog-book-form");

    // Store the values of each input field in a variable and create book with them as args
    addBookBtn.addEventListener("click", () => {
        const titleInfo = document.querySelector("#book-title").value;
        const authorInfo = document.querySelector("#book-author").value;
        const pagesInfo = document.querySelector("#book-pages").value;
        const readInfo = document.querySelector("#book-read-status").checked;

        addBookToLibrary(titleInfo, authorInfo, pagesInfo, readInfo);

        // Render each book from myLibrary array
        renderBook();

        // Clear input field whenever book added to library 
        const allInputFields = document.querySelectorAll("input");
        allInputFields.forEach(field => {
            field.value = "";
        });
    });

    // Clicking the "Register New Book" button opens up the dialog window
    openDialogBtn.addEventListener("click", () => dialogWindow.showModal());
});