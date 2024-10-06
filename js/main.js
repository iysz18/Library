// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const dialogWindow = document.querySelector("dialog");
    const addBookBtn = document.querySelector(".add-book");

    addBookBtn.addEventListener("click", () => {
        dialogWindow.showModal();
    });
});