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
  
   /* useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=subject:children&printType=books&maxResults=10&fields=items(id,volumeInfo(imageLinks/thumbnail),volumeInfo(title),volumeInfo(authors))')
          .then(response => response.json())
          .then(data => {
            const bookItems = data.items.map(item => {
              const book = item.volumeInfo;
              const id = item.id;
              const image = book.imageLinks ? book.imageLinks.thumbnail.replace(/^http:\/\//i, 'https://').replace(/zoom=[0-9]/i, 'zoom=2') : '';
              const title = book.title;
              const authors = book.authors ? book.authors.join(', ') : 'Unknown';
              const price = 'Loading...';
    
              return { id, image, title, authors, price };
            });
    
            setBooks(bookItems);
    
            // For each book, fetch the sale price from a separate API call
            bookItems.forEach((book, index) => {
              fetch(`https://www.googleapis.com/books/v1/volumes/${book.id}`)
                .then(response => response.json())
                .then(data => {
                  const saleInfo = data.saleInfo;
                  const bookPrice = saleInfo ? saleInfo.listPrice.amount : 'N/A';
                  const updatedBook = { ...book, price: bookPrice };
                  bookItems[index] = updatedBook;
                  setBooks([...bookItems]);
                });
            });
          });
      }, []);*/

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
