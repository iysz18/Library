document.addEventListener("DOMContentLoaded", () => {
    // open the book register dialog
    const registerBookBtn = document.querySelector(".openBookDialog");
    const registerBookDialog = document.querySelector("dialog");

    const myLibrary = [];

    function Book(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = readStatus;
    }

    function addBookToLibrary(title, author, pages, readStatus) {
        let newBook = new Book(title, author, pages, readStatus);
        myLibrary.push(newBook);
        for (let book in myLibrary) console.log(myLibrary[book]);
    }
    

    registerBookBtn.addEventListener("click", () => registerBookDialog.showModal());

        /* By clicking on the add book button inside the dialog,
            we add the title, author, pages and read status info */ 
        const addToLibrary = document.querySelector(".addToLibrary");
        addToLibrary.addEventListener("click", () => {
            const titleInfo = document.querySelector("#title");
            const authorInfo = document.querySelector("#author");
            const pagesInfo = document.querySelector("#pages");
            const readInfo = document.querySelector("#read-status");

            addBookToLibrary(titleInfo.value, authorInfo.value, pagesInfo.value, readInfo.checked);
        });
    
});