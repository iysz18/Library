// Initial function which waits for the DOM to complete load
document.addEventListener("DOMContentLoaded", () => {

    // Array to store books and display them when page loads 
    const myLibrary = new Array();

    // Load three books into the myLibrary array for demonstration
    myLibrary[0] = {
        title: "The Daily Stoic",
        author: "Ryan Holiday",
        pages: 416,
        read: "already read",
    };

    myLibrary[1] = {
        title: "The 48 Laws of Power",
        author: "Robert Greene",
        pages: 452,
        read: "already red",
    };

    // render them from the beginning
    renderBook();
    
    // Object constructor to create new book instances
    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = `${read ? "already read" : "not read yet"}`;
    };

    /* Function to create the Book with all the provided 
       info and adding it to the myLibrary array 
    */ 
    function addBookToLibrary(title, author, pages, readStatus) {
        const newBook = new Book(title, author, pages, readStatus);
        myLibrary.push(newBook);
    };

    // Render books function which will loop over the myLibrary array and create new cards for each book
    function renderBook() {
        const bookshelf = document.querySelector(".bookshelf-container");

        // before creating and rendering each book's info card, remove all of them to ensure no duplicates exist
        if (bookshelf.hasChildNodes()) {
            // Convert the childNodes into an array to safely loop over and remove.
            Array.from(bookshelf.childNodes).forEach(card => {
                bookshelf.removeChild(card);
            });
        }

        // Create paragprah and populate it with the book's info
        myLibrary.forEach((book, index) => {
            // Create book info card
            const infoCard = document.createElement("div");
            infoCard.classList.add("infoCard");

            const bookTitle = document.createElement('p');
            const bookAuthor = document.createElement('p');
            const bookPages = document.createElement('p');
            const bookRead = document.createElement('p');

            bookTitle.innerHTML = `${book.title}`;
            bookAuthor.innerHTML = `${book.author}`;
            bookPages.innerHTML = `${book.pages}`;
            bookRead.innerHTML = `${book.read}`;

            infoCard.appendChild(bookTitle);
            infoCard.appendChild(bookAuthor);
            infoCard.appendChild(bookPages);
            infoCard.appendChild(bookRead);

            // Add a remove button to remove the selected book from library
            const removeBtn = document.createElement('button')
            removeBtn.textContent = "Remove";

            // When clicking the removeBtn, remove the book
            removeBtn.addEventListener("click", () => {
                // Remove the book from myLibrary using its index
                myLibrary.splice(index, 1);
                
                // Re-render the bookshelf to reflect the changes
                renderBook();
            });
            
            // Append created elements to their parent elements
            infoCard.appendChild(removeBtn);
            bookshelf.appendChild(infoCard);
        });
    };

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