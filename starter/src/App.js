import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Searcher from "./components/Searcher";
import ListBookContainer from "./components/ListBookContainer";
import * as BooksAPI from "./BooksAPI";

function App() {

  const [booksArray, setBooksArray] = useState([]);

  const bookStatus = {
    "reading":"currentlyReading",
    "toRead":"wantToRead",
    "read":"read"
  }

  const handleCategoryChange = (book, value) => {
    //If the status of the book is none, delete ir from the array
    if(value!=bookStatus["reading"] && value!=bookStatus["toRead"] && value!=bookStatus["read"]){
      const newArray = booksArray.filter((b)=>{return b.title!=book.title });
      setBooksArray(newArray);
    } //If the book clicked is already in the bookshelf
    else if(booksArray.includes(book)){
      const newArray = booksArray.map((b)=>{
        if(b.title==book.title){
          b.shelf=value;
        }
        return b;
      })

      setBooksArray(newArray);
    }//If is clicked in search page
    else{
      console.log("search")
      book["shelf"] = value;
      setBooksArray(booksArray.concat(book));
    }
  }

  useEffect(()=>{
    const getBookshelves = async () =>{
      const res = await BooksAPI.getAll();
      setBooksArray(res);
    }
    getBookshelves();
  },[])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <ListBookContainer
          booksArray={booksArray}
          handleCategoryChange={handleCategoryChange}
          bookStatus={bookStatus}
            />
        } 
        />
        <Route path="/search" element={
          <Searcher booksArray={booksArray} handleCategoryChange={handleCategoryChange}/>
        } 
          />
      </Routes>
    </div>
    
  );
}

export default App;
