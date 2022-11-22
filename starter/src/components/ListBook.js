import Book from "./Book";

const ListBook = ({ booksArray, bookStatus }) => {
	const booksArrayFileter = booksArray.filter((b)=>{
		console.log(b.status +"/"+ bookStatus)
		return b.status == bookStatus;
	});
	return(
		<div className="bookshelf-books">
			<ol className="books-grid">
				{
					booksArrayFileter.length>0 ? booksArrayFileter.map((book)=> {
						return <Book book={book} />
					})
					:
					<div>There's no books in this category</div>
				}
			</ol>
		</div>
	)
}

export default ListBook;