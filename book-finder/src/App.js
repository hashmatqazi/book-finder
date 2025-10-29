import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import Spinner from "./components/Spinner";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setBooks([]);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await response.json();
      setBooks(data.docs.slice(0, 20)); // show top 20 results
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Book Finder</h1>
        <p>User Persona: Alex, College Student</p>
        <p>Need: Alex wants to search books easily for college studies.</p>
      </header>
      <SearchBar onSearch={handleSearch} />
      {loading ? <Spinner /> : <BookList books={books} />}
    </div>
  );
}

export default App;
