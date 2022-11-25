import ListBook from "./ListBook";
import { Link } from "react-router-dom";

const ListBookContainer = ({booksArray, handleCategoryChange, bookStatus}) => {
	const bookStatusReading = bookStatus["reading"];
	const bookStatusToRead = bookStatus["toRead"];
	const bookStatusRead = bookStatus["read"];

	return(
		<div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
				<div className="bookshelf-books">
					<ListBook
					booksArray={booksArray}
					bookStatus={bookStatusReading}
					handleCategoryChange={handleCategoryChange}
					/>
				</div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to read</h2>
				<div className="bookshelf-books">
					<ListBook
					booksArray={booksArray}
					bookStatus={bookStatusToRead}
					handleCategoryChange={handleCategoryChange}
					/>
				</div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
				<div className="bookshelf-books">
					<ListBook
					booksArray={booksArray}
					bookStatus={bookStatusRead}
					handleCategoryChange={handleCategoryChange}
					/>
				</div>
              </div>
            </div>
          </div>
          <div className="open-search">
		  <Link to="/search">Add a book</Link>
			
          </div>
        </div>
	)
}

export default ListBookContainer;