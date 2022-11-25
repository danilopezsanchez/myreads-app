import Book from "./Book";

const ListBook = ({ booksArray, bookStatus, handleCategoryChange, booksInSearch }) => {
	//Filtering books by shelf
	let booksArrayFiltered=[];
	if(bookStatus){
		booksArrayFiltered = booksArray.filter((b)=>{
			return b.shelf == bookStatus;
		});
	}else{
		booksArrayFiltered=booksInSearch;
	}
	return(
			<ol className="books-grid">
				{
					booksArrayFiltered.length>0 ? booksArrayFiltered.map((book, index)=> {
						return <Book key={index} book={book} handleCategoryChange={handleCategoryChange} />
					})
					:
					<div>There are no books here :(</div>
				}
			</ol>
	)
}

export default ListBook;