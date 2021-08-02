import React from 'react';

function BookForm(props) {
  return (
    <div style={styles.bookForm}>
      <div style={styles.bookFormInputs}>
        <label style={styles.label}>
          Title
          <input type="text" value={props.title} onChange={e => props.bookFormChanges('title', e.target.value)} style={styles.input}/>
        </label>
        <label style={styles.label}>
          Author
          <input type="text" value={props.author} onChange={e => props.bookFormChanges('author', e.target.value)} style={styles.input} />
        </label>
        <label style={styles.label}>
          Pages
          <input type="number" value={props.pages} onChange={e => props.bookFormChanges('pages', e.target.value)} style={styles.input} />
        </label>
        <label style={styles.label}>
          Read
          <input type="checkbox" checked={props.read} onChange={e => props.bookFormChanges('read', e.target.checked)} style={styles.input} />
        </label>
      </div>
      <button onClick={() => props.addButtonClick()} style={styles.button}>Add</button>
    </div>
  );
}

const styles = {
  bookForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bookFormInputs: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  label: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    flexBasis: '100%',
  },
  button: {
    marginTop: '20px',
  }
}

export default BookForm;
