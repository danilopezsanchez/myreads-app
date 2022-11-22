const Book = ({ book, handleCategoryChange }) => {
	const { title, author, img, status } = book;
	const backgroundImg = `url(${img})`;

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
					<select onChange={handleChange} value={status}>
						<option value="none" disabled>
						Move to...
						</option>
						<option value="reading">
						Currently Reading
						</option>
						<option value="toRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
					</div>
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{author}</div>
			</div>
		</li>
	)
}

export default Book;