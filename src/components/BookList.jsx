import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  // Group books by category
  const groupedBooks = books.reduce((groups, book) => {
    const category = book.category || 'Uncategorized';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(book);
    return groups;
  }, {});

  return (
    <div>
      {Object.keys(groupedBooks).map(category => (
        <div key={category} style={{ marginBottom: '40px' }}>
          <h2>{category} Books</h2>
          <ul>
            {groupedBooks[category].map(book => (
              <li key={book.id}>
                <strong>{book.title}</strong> by {book.author} (${book.price})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default BookList;

