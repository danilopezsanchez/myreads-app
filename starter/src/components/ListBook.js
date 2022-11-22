import Book from "./Book";

const ListBook = ({ booksArray, bookStatus, handleCategoryChange }) => {
	const booksArrayFileter = booksArray.filter((b)=>{
		return b.shelf == bookStatus;
	});
	return(
		<div className="bookshelf-books">
			<ol className="books-grid">
				{
					booksArrayFileter.length>0 ? booksArrayFileter.map((book, index)=> {
						return <Book key={index} book={book} handleCategoryChange={handleCategoryChange} />
					})
					:
					<div>There's no books in this category</div>
				}
			</ol>
		</div>
	)
}

export default ListBook;