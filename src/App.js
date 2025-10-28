import { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Book Finder</h1>
      <SearchBar setBooks={setBooks} setLoading={setLoading} setError={setError} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <BookList books={books} />
    </div>
  );
}

export default App;
