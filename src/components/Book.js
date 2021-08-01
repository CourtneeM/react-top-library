import React from 'react';

function Book(props) {
  return (
    <div style={styles.book} >
      <p>{props.book.title}</p>
      <p>{props.book.author}</p>
      <p>{props.book.pages}</p>
      <p>{props.book.read ? 'Read' : 'Not Read'}</p>
    </div>
  );
}

const styles = {
  book: {
    display: 'flex',
    justifyContent: 'space-around',
  }
}

export default Book;
