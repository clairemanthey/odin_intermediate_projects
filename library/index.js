//Variables from HTML
let headerOne = document.getElementById("header_01"); 
let section = document.getElementById("section_book-list");
let inputs = document.getElementsByClassName('input')
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

		//created finished checkbox
		let finishedContainer = document.createElement("div");
		finishedContainer.classList.add("container_finished");
		let finishedLabel = document.createElement("label");
		finishedLabel.classList.add("label_finished")
		finishedLabel.textContent = "Finished?";
		let finishedInput = document.createElement("input");
		
		finishedInput.setAttribute("type", "checkbox");
		finishedInput.classList.add("input_finished");

		if(readBook === true){
			finishedInput.checked = true;
		}

		finishedInput.onclick = function(){
			if(readBook === false){
				readBook = true
				status.textContent = "Status: Read";
			}else if(readBook === true){
				readBook = false;
  			    status.textContent = "Status: Not Read";
			}
		}

		finishedContainer.appendChild(finishedLabel);
		finishedContainer.appendChild(finishedInput)
		article.appendChild(finishedContainer);

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

/*input from modal*/
let addBtn02 = document.getElementById("modal_add-btn");
let modalTitle = document.getElementById("modal-title");
let modalAuthor = document.getElementById("modal-author");
let modalLength = document.getElementById("modal-length");
let modalRead = document.getElementById("modal-read");


function addBookToLibraryInput(){
	//generate new id
	let lastElement = myLibrary[myLibrary.length - 1];
	let nextId = lastElement.id + 1

	//inputs from aside
	let asideTitleValue = inputTitle.value;
	let asideAuthorValue = inputAuthor.value;
	let asideLengthValue = parseInt(inputLength.value);
	let asideReadValue = inputRead.checked;

	myLibrary.push({
		id:nextId, title:asideTitleValue, author:asideAuthorValue, pages:asideLengthValue,read:asideReadValue
	})

	//Display new book from aside inputs in DOM
    //Created the article element
    let article = document.createElement("article");
  	 article.classList.add("article_book")

	//created h3 elementt and displed the book title in the DOM
	let asideTitle = document.createElement("h3");
	asideTitle.classList.add("book_header");
	asideTitle.textContent = asideTitleValue;
	article.appendChild(asideTitle);

	//created p element and diplayed author in DOM
	let asideAuthor = document.createElement("p");
	asideAuthor.classList.add("display_author");
	asideAuthor.textContent = asideAuthorValue;
	article.appendChild(asideAuthor);

	//created p element and displayed number of pages in DOM
	let asidePages = document.createElement("p");
	asidePages.classList.add("display_pages");
	asidePages.textContent = asideLengthValue;
	article.appendChild(asidePages);

	//created p element for read, displayed in DOM
	let asideStatus = document.createElement("p");
	asideStatus.classList.add("status")
	asideStatus.textContent = `Status: ${asideReadValue ? "Read" : "Not Read"}`;
	article.appendChild(asideStatus);

	//created finished checkbox
	let finishedContainer = document.createElement("div");
	finishedContainer.classList.add("container_finished");
	let finishedLabel = document.createElement("label");
	finishedLabel.classList.add("label_finished")
	finishedLabel.textContent = "Finished?";
	let finishedInput = document.createElement("input");
		
	finishedInput.setAttribute("type", "checkbox");
	finishedInput.classList.add("input_finished");

	if(asideReadValue === true){
		finishedInput.checked = true;
	}

	finishedInput.onclick = function(){
		if(asideReadValue === false){
			asideReadValue = true
			asideStatus.textContent = "Status: Read";
		}else if(asideReadValue === true){
			asideReadValue = false;
  		    asideStatus.textContent = "Status: Not Read";
		}
	}

	finishedContainer.appendChild(finishedLabel);
	finishedContainer.appendChild(finishedInput)
	article.appendChild(finishedContainer);

	//create delete button and displayed in DOM
	let btnDelete = document.createElement("button");
	btnDelete.classList.add("btn-delete");
	btnDelete.textContent = "Delete";
	btnDelete.onclick = function(e){
		btnDelete.parentElement.remove();
	}
	article.appendChild(btnDelete)
	section.appendChild(article)	
}

function addBookToLibraryModal(){
    //Add book from modal input
	//generate new id
	let lastElement = myLibrary[myLibrary.length - 1];
	let nextId = lastElement.id + 1

	//inputs from modal
	let modalTitleValue = modalTitle.value;
	let modalAuthorValue = modalAuthor.value;
	let modalLengthValue = modalLength.value;
	let modalReadValue = modalRead.checked;

	myLibrary.push({
		id:nextId, title:modalTitleValue, author:modalAuthorValue, pages:modalLengthValue,read:modalReadValue
	})
	
	//Display new book from modal inputs in DOM

    //Created the article element

    let article = document.createElement("article");
  	article.classList.add("article_book")

	//created h3 elementt and displed the book title in the DOM
	let displayModalTitle = document.createElement("h3");
	displayModalTitle.classList.add("book_header");
	displayModalTitle.textContent = modalTitleValue;
	article.appendChild(displayModalTitle);

	//created p element and diplayed author in DOM
	let displayModalAuthor = document.createElement("p");
	displayModalAuthor.classList.add("display_author");
	displayModalAuthor.textContent = modalAuthorValue;
	article.appendChild(displayModalAuthor);

	//created p element and displayed number of pages in DOM
	let displayModalPages = document.createElement("p");
	displayModalPages.classList.add("display_pages");
	displayModalPages.textContent = modalLengthValue;
	article.appendChild(displayModalPages);

	//created p element for read, displayed in DOM
	let displayModalStatus = document.createElement("p");
	displayModalStatus.classList.add("status")
	displayModalStatus.textContent = `Status: ${modalReadValue ? "Read" : "Not Read"}`;
	article.appendChild(displayModalStatus);

	//created finished checkbox
	let finishedContainer = document.createElement("div");
	finishedContainer.classList.add("container_finished");
	let finishedLabel = document.createElement("label");
	finishedLabel.classList.add("label_finished")
	finishedLabel.textContent = "Finished?";
	let finishedInput = document.createElement("input");
		
	finishedInput.setAttribute("type", "checkbox");
	finishedInput.classList.add("input_finished");

	if(modalReadValue === true){
		finishedInput.checked = true;
	}

	finishedInput.onclick = function(){
		if(modalReadValue === false){
			modalReadValue = true
			displayModalStatus.textContent = "Status: Read";
		}else if(modalReadValue === true){
			modalReadValue = false;
  		    displayModalStatus.textContent = "Status: Not Read";
		}
	}

	finishedContainer.appendChild(finishedLabel);
	finishedContainer.appendChild(finishedInput)
	article.appendChild(finishedContainer);


	//create delete button and displayed in DOM
	let btnDelete = document.createElement("button");
	btnDelete.classList.add("btn-delete");
	btnDelete.textContent = "Delete";
	btnDelete.onclick = function(e){
		btnDelete.parentElement.remove();
	}
	article.appendChild(btnDelete)
		
	//Displayed article in DOM
	section.appendChild(article)	
}

//Reset all inputs
let resetInputs = () => {
	for (let i = 0; i < inputs.length; i++){
		inputs[i].value = "";
		inputs[i].checked = false;
	}
}

//Button Event Listeners

addBtn01.addEventListener("click", (event) => {
	event.preventDefault();
	addBookToLibraryInput();
	resetInputs();
})

addBtn02.addEventListener("click", (event) => {
	event.preventDefault();
	addBookToLibraryModal();
	resetInputs();

})

//Delete entry function
window.addEventListener("DOMContentLoaded", function(event){
  document.querySelectorAll('.btn-delete').forEach(el => {
    el.onclick = () => deleteBook(el)
  })
});
function deleteBook(e){
  e.parentElement.remove()
}

//Switch from Not Read to Read



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





















