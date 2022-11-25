import { useState } from "react";
import {Link} from "react-router-dom";
import ListBook from "./ListBook";
import * as BooksAPI from "../BooksAPI";

const Searcher = ({handleCategoryChange, booksArray }) => {

  const [query, setQuery] = useState("");
  const [arraySearch, setArraySearch] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    const getBooksFromQuery = async () =>{
      const res = await BooksAPI.search(query.trim());
      let result = [];
      result = res.map(el => {
        booksArray.map(element => {
            if(element.id === el.id){
                el["shelf"]=element.shelf;
            }
        });
        return el;
      });

      setArraySearch(result);
    }
    getBooksFromQuery();
  } 

	return(
		<div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search by title, author, or ISBN"
                  value={query}
                  onChange={(event)=>{setQuery(event.target.value)}}
                />
              </form>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {<ListBook
              booksArray={booksArray}
              handleCategoryChange={handleCategoryChange}
              booksInSearch={arraySearch}
            />}
            </ol>
          </div>
        </div>
	)
}

export default Searcher;