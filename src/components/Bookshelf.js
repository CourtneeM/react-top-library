import React from 'react';
import Book from './Book';

function Bookshelf(props) {
  return (
    <div>
      <div style={styles.bookshelfHeader} className="bookshelf-header">
        <p>Title</p>
        <p>Author</p>
        <p>Pages</p>
        <p>Read Status</p>
      </div>

      {
        props.books.map((book, index) => {
          return <Book key={index} book={book} />
        })
      }
    </div>
  )
}

const styles = {
  bookshelfHeader: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}

export default Bookshelf;
