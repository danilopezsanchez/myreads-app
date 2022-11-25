const Book = ({ book, handleCategoryChange }) => {
	const { title, authors, imageLinks, shelf } = book;
	const backgroundImg = `url(${imageLinks.smallThumbnail})`;
	const valueShelf = shelf? shelf: "none";

	const handleChange  = (event) => {
		handleCategoryChange(book, event.target.value);
	}

	return(
		<li>
			<div className="book">
				<div className="book-top">
					<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage: backgroundImg,
					}}
					></div>
					<div className="book-shelf-changer">
					<select onChange={handleChange} value={valueShelf}>
						<option value="moveto" disabled>
						Move to...
						</option>
						<option value="currentlyReading">
						Currently Reading
						</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
					</div>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">
					{
						authors ? authors.map((a,index)=>{
							if(index === authors.length-1){
								return a
							}
							else{
								return a+", "
							}
						}) : "Unknown"
					}
					</div>
			</div>
		</li>
	)
}

export default Book;