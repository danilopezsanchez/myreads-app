import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListBook from "./ListBook";
import * as BooksAPI from "../BooksAPI";
import debounce from 'lodash.debounce';

const Searcher = ({ handleCategoryChange, booksArray }) => {
	const [query, setQuery] = useState("");
	const [arraySearch, setArraySearch] = useState([]);

	const handleInputChange = (event) => {
		setQuery(event.target.value);
	};

	const getBooksFromQuery = async () => {
		if(query===""){
			setArraySearch([]);
			return;
		}
		const res = await BooksAPI.search(query)
		.catch(error=>{
			setArraySearch([])
		});
		if (res && res.length > 0 && !res.error) {
			let result = [];
			result = res.map((el) => {
				booksArray.map((element) => {
					if (element.id === el.id) {
						el["shelf"] = element.shelf;
					}
					return element;
				});
				return el;
			});
			setArraySearch(result);
		}
		else{
			setArraySearch([]);
		}
	};

	const debouncedResults = debounce(()=>{
		getBooksFromQuery()
	}, 200);

	const handleSearch = () => {
		debouncedResults();

		return () => {
			debouncedResults.cancel();
		  };

	};

	useEffect(handleSearch,[query])

	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link className="close-search" to="/">
					Close
				</Link>
				<div className="search-books-input-wrapper">
					<input
						type="text"
						placeholder="Search by title, author, or ISBN"
						value={query}
						onChange={handleInputChange}
					/>
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">
					{
						<ListBook
							booksArray={booksArray}
							handleCategoryChange={handleCategoryChange}
							booksInSearch={arraySearch}
						/>
					}
				</ol>
			</div>
		</div>
	);
};

export default Searcher;
