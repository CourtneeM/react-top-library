import React, { Component } from 'react';
import BookForm from './components/BookForm';
import Bookshelf from './components/Bookshelf';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      pages: '',
      read: false,
      books: []
    }

    this.bookFormChanges = this.bookFormChanges.bind(this);
    this.addButtonClick = this.addButtonClick.bind(this);
    this.removeBookClick = this.removeBookClick.bind(this);
    this.submitBookEdit = this.submitBookEdit.bind(this);
  }

  bookFormChanges(key, value) {
    this.setState({
      [key]: value
    });
  }

  addButtonClick() {
    const {title, author, pages, read} = {...this.state}

    if(!title || !author || !pages) return;

    const booksCopy = [...this.state.books];
     booksCopy.push({title, author, pages, read});

    
    this.setState({
      title: '',
      author: '',
      pages: '',
      read: false,
      books: booksCopy,
    });
  }

  removeBookClick(index) {
    const booksCopy = [...this.state.books];
    booksCopy.splice(index, 1);

    this.setState({
      books: booksCopy,
    });
  }

  submitBookEdit(index, title, author, pages, read) {
    const booksCopy = [...this.state.books];
    booksCopy.splice(index, 1, {title, author, pages, read});
    
    this.setState({
      books: booksCopy
    });
  }

  render() {
    return (
      <div>
        <BookForm
          bookFormChanges={this.bookFormChanges}
          addButtonClick={this.addButtonClick}
          title={this.state.title}
          author={this.state.author}
          pages={this.state.pages}
          read={this.state.read}
        />
        <Bookshelf books={this.state.books} removeBookClick={this.removeBookClick} submitBookEdit={this.submitBookEdit} />
      </div>
    );
  }
}

export default App;
