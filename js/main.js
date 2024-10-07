document.addEventListener("DOMContentLoaded", () => {
    // open the book register dialog
    const registerBookBtn = document.querySelector(".openBookDialog");
    const registerBookDialog = document.querySelector("dialog");

    const myLibrary = [];

    // Book Constructor function to create book objects
    function Book(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = readStatus;
    }

    // add the book to the library by creating the book with the Book {}
    function addBookToLibrary(title, author, pages, readStatus) {
        let newBook = new Book(title, author, pages, readStatus);
        myLibrary.push(newBook);
        for (let book in myLibrary) console.log(myLibrary[book]);
    }
    
    // Register Btn to register the new book
    registerBookBtn.addEventListener("click", () => registerBookDialog.showModal());

        /* By clicking on the add book button inside the dialog,
            we add the title, author, pages and read status info */ 
        const addToLibrary = document.querySelector(".addToLibrary");
        addToLibrary.addEventListener("click", () => {
            const titleInfo = document.querySelector("#title");
            const authorInfo = document.querySelector("#author");
            const pagesInfo = document.querySelector("#pages");
            const readInfo = document.querySelector("#read-status");

            // Finally, add the book to the library by calling the function
            addBookToLibrary(titleInfo.value, authorInfo.value, pagesInfo.value, readInfo.checked);

            // After book got created/added to library, show it as a card in the bookShelf div
            const bookShelfContainer = document.querySelector(".bookshelf");

            // Create dynamically new bookInfo cards
            const newBookCard = document.createElement('div');
            newBookCard.classList.add("bookCardInfo");
            const newBookInfo = document.createElement('p');
            newBookInfo.innerHTML = `Title: ${titleInfo.value}<br>
                                     Author: ${authorInfo.value}<br>
                                     Pages: ${pagesInfo.value}<br>
                                     Read: ${readInfo.value}<br>`;
            newBookCard.appendChild(newBookInfo);
            bookShelfContainer.appendChild(newBookCard);

        });
});