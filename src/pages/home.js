import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

function Homepage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://openlibrary.org/subjects/childrens_books.json?details=true')
      .then(response => {
        const bookData = response.data.works.map(book => {
          const image = book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg` : null;
          const price = book.price && book.price[0] ? book.price[0].amount : null;
          return {
            id:book.key,
            title: book.title,
            author: book.authors[0].name,
            firstPublishYear: book.first_publish_year,
            numberOfPages: book.number_of_pages,
            image,
            price,
          };
        });
        setBooks(bookData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Children's Books Catalog</h1>
      <div style={{display:'flex',flexWrap: "wrap"}}>
        {books.map(book => (
          <BookCard book={book} key={book.id}></BookCard>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
