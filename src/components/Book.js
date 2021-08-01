import React from 'react';

function Book(props) {
  return (
    <div style={styles.book} >
      <p style={styles.bookItem}>{props.book.title}</p>
      <p style={styles.bookItem}>{props.book.author}</p>
      <p style={styles.bookItem}>{props.book.pages}</p>
      <p style={styles.bookItem}>{props.book.read ? 'Read' : 'Not Read'}</p>
      <button>Edit</button>
      <button onClick={e => {
        const index = [...e.target.parentElement.parentElement.children].indexOf(e.target.parentElement) - 1;
        props.removeBookClick(index);
      }
      }>Delete</button>
    </div>
  );
}

const styles = {
  book: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  bookItem: {
    width: 125,
  }
}

export default Book;
