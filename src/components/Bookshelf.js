import React from 'react';
import Book from './Book';

function Bookshelf(props) {
  return (
    <div>
      <div style={styles.bookshelfHeader} className="bookshelf-header">
        <p style={styles.bookshelfHeaderItems}>Title</p>
        <p style={styles.bookshelfHeaderItems}>Author</p>
        <p style={styles.bookshelfHeaderItems}>Pages</p>
        <p style={styles.bookshelfHeaderItems}>Read Status</p>
      </div>

      {
        props.books.map((book, index) => {
          return <Book key={index} book={book} removeBookClick={props.removeBookClick}/>
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
  bookshelfHeaderItems: {
    width: 125,
  }
}

export default Bookshelf;
