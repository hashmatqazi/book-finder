import React from "react";

function BookList({ books }) {
  return (
    <div className="book-list">
      {books.length === 0 && <p>No results found.</p>}
      {books.map((book) => {
        const coverUrl = book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "https://via.placeholder.com/150";

        return (
          <div key={book.key} className="book-item">
            <img src={coverUrl} alt={book.title} />
            <h3>{book.title}</h3>
            <p>
              {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
            </p>
            <p>{book.first_publish_year ? `Published: ${book.first_publish_year}` : ""}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BookList;
