//Variables from HTML
let headerOne = document.getElementById("header_01"); 
let section = document.getElementById("section_book-list")


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

function Book(){
	// Write a functiontaht loops through the array
	//Displays each book on the page'

	let displayMyLibrary = myLibrary.map(({title, author, pages, dateAdded, read}) =>{	
		let bookTitle = title;
		let bookAuthor = author;
		let length = pages;
		let readBook = read;


		console.log(bookTitle)
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

function addBookToLibrary(){

}


/*
		let readContainer = document.createElement("div");
		let checkBox = document.createElement("input");
		checkBox.setAttribute("type", "checkbox")
		let readLabel = document.createElement("label");
		readLabel.textContent = "Read Book?";
		readContainer.appendChild(readLabel);
		readContainer.appendChild(checkBox);
		article.appendChild(readContainer)
*/