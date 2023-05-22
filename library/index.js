//Variables from HTML
let headerOne = document.getElementById("header_01"); 
let section = document.getElementById("section_book-list")
//Both Forms
let asideForm = document.getElementById("aside_form");
let modalForm = document.getElementById("modal-form")

/*--Library Array--*/

let myLibrary = [
	{
		id: 1,
		title: "The Hitchhiker's Guide to the Galaxy",
		author: "Douglas Adams",
		pages: 216,
		read: true,
		dateAdded: "March 15, 2020", 
	},
	{
		id: 2,
		title: "The Restaurant at the End of the Universe",
		author: "Douglas Adams",
		pages: 250,
		read: false,
		dateAdded: "March 29, 2020", 		
	}

	];
/*--Display Books in DOM--*/
function Book(){
	// Write a functiontaht loops through the array
	//Displays each book on the page'

	let displayMyLibrary = myLibrary.map(({title, author, pages, dateAdded, read}) =>{	
		let bookTitle = title;
		let bookAuthor = author;
		let length = pages;
		let readBook = read;

        //Created the article element
	    let article = document.createElement("article");
		article.classList.add("article_book")

	    //created h3 elementt and displed the book title in the DOM
		let bookHeader = document.createElement("h3");
		bookHeader.classList.add("book_header");
		bookHeader.textContent = bookTitle;
		article.appendChild(bookHeader)

		//created p element and diplayed author in DOM
		let displayAuthor = document.createElement("p");
		displayAuthor.classList.add("display_author");
		displayAuthor.textContent = bookAuthor;
		article.appendChild(displayAuthor);

		//created p element and displayed number of pages in DOM
		let displayPages = document.createElement("p");
		displayPages.classList.add("display_pages");
		displayPages.textContent = `${length} pages`;
		article.appendChild(displayPages);

		//created p element for read, displayed in DOM
		let status = document.createElement("p");
		status.classList.add("status")
		status.textContent = `Status: ${readBook ? "Read" : "Not Read"}`;
		article.appendChild(status);

		//create delete button and displayed in DOM
		let btnDelete = document.createElement("button");
		btnDelete.classList.add("btn-delete");
		btnDelete.textContent = "Delete";
		article.appendChild(btnDelete)



		//Displayed article in DOM
		section.appendChild(article)	
	})


}

Book();

/*--Add Books--*/

/*input from aside*/
let addBtn01 = document.getElementById("btn_add-01");
let inputTitle = document.getElementById("input-title");
let inputAuthor = document.getElementById("input-author");
let inputLength = document.getElementById("input-length");
let inputRead = document.getElementById("input-read");
let inputs = document.getElementsByClassName("input")

/*input from modal*/
let addBtn02 = document.getElementById("modal_add-btn");
let modalTitle = document.getElementById("modal-title");
let modalAuthor = document.getElementById("modal-author");
let modalLength = document.getElementById("modal-length");
let modalRead = document.getElementById("modal-read");


function addBookToLibrary(){
	console.log("BOOK ADDED")
	//inputs from aside
	let asideTitleValue = inputTitle.value;
	console.log(asideTitleValue)
	let asideAuthorValue = inputAuthor.value;
	console.log(asideAuthorValue)
	let asideLengthValue = inputLength.value;
	console.log(asideLengthValue)
	let asideReadValue = inputRead.checked;
	console.log(asideReadValue)


	//inputs from modal
	let modalTitleValue = modalTitle.value;
	console.log(modalTitleValue);
	let modalAuthorValue = modalAuthor.value;
	console.log(modalAuthorValue);
	let modalLengthValue = modalLength.value;
	console.log(modalLengthValue)
	let modalReadValue = modalRead.checked;
	console.log(modalReadValue);

}

addBtn01.addEventListener("click", (event) => {
	event.preventDefault();
	addBookToLibrary();
})

//addBtn01.addEventListener("click", addBookToLibrary)

addBtn02.addEventListener("click", (event) => {
	event.preventDefault();
	addBookToLibrary();

})

//addBtn02.addEventListener("click", addBookToLibrary)


/*--Display and Close add book modal--*/
let openModal = document.getElementById("btn-add");
let modalContainer = document.getElementById("modal_add-book");
let span = document.getElementsByClassName("close")[0];

openModal.addEventListener("click", () => {
	modalContainer.style.display = "block";

});

span.addEventListener("click", () => {
	modalContainer.style.display = "none"
});

window.addEventListener("click", (event) => {
	if(event.target == modalContainer){
		modalContainer.style.display = "none"
	}
})





















