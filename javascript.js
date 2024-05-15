const bookName = document.getElementById("bookName");
const bookAuthor = document.getElementById("bookAuthor");
const pages = document.getElementById("pages");
const showBook = document.querySelector(".showBook")
const myDialog = document.querySelector(".myDialog");
const showDialog = document.getElementById("ShowDialog")
let status = "non-read";

const myLibrary ={  };

showDialog.addEventListener("click",openDialog);

function openDialog(){ 
    myDialog.showModal();
}
    

function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    
}


function addToLibrary() {
    let book = new Book(bookName.value, bookAuthor.value, pages.value);
    let div = document.createElement("div");
    div.classList.add("showBook");
    div.classList.add("backgroundPad")
    
    let titleRow = document.createElement("div");
    titleRow.textContent = `Title: ${book.title}`;

    let authorRow = document.createElement("div");
    authorRow.textContent = `Author: ${book.author}`;

    let pageRow = document.createElement("div");
    pageRow.textContent = `Pages: ${book.pages}`;


    let statusSpan = document.createElement("span");
    statusSpan.textContent = status;

    let changeStatusBtn = document.createElement("button");
    changeStatusBtn.textContent = "Status";
    changeStatusBtn.style.backgroundColor = "red";
    changeStatusBtn.addEventListener('click', () => {
        if (status === "read") {
            
            status = "non-read";
            changeStatusBtn.style.backgroundColor = "red";
        } else {
            status = "read";
            changeStatusBtn.style.backgroundColor = "lightgreen";
        }
        statusSpan.textContent = status;
    });

    // Create a remove button
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
        // Remove the div when the remove button is clicked
        div.remove();
    });

    // Append the book info, status, remove button, and change status button to the div

    div.appendChild(titleRow);
    div.appendChild(authorRow);
    div.appendChild(pageRow);
    div.appendChild(statusSpan);
    div.appendChild(changeStatusBtn);
    div.appendChild(removeButton);


    // Append the div to the showBook container
    showBook.appendChild(div);

    // Close the dialog
    myDialog.close();
}