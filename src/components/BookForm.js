import React from 'react';

function BookForm(props) {
  return (
    <div>
      <label>
        Title
        <input type="text" value={props.title} onChange={e => props.bookFormChanges('title', e.target.value)} />
      </label>
      <label>
        Author
        <input type="text" value={props.author} onChange={e => props.bookFormChanges('author', e.target.value)}/>
      </label>
      <label>
        Pages
        <input type="number" value={props.pages} onChange={e => props.bookFormChanges('pages', e.target.value)}/>
      </label>
      <label>
        Read
        <input type="checkbox" checked={props.read} onChange={e => props.bookFormChanges('read', e.target.checked)} />
      </label>
      <button onClick={() => props.addButtonClick()} >Add</button>
    </div>
  );
}

export default BookForm;
