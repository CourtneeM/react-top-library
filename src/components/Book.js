import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editBook: false,
      editTitle: this.props.book.title,
      editAuthor: this.props.book.author,
      editPages: this.props.book.pages,
      editRead: this.props.book.read
    }
  }

  displayBookInfo() {
    return (
      <div style={styles.book}>
        <p style={styles.bookItem}>{this.props.book.title}</p>
        <p style={styles.bookItem}>{this.props.book.author}</p>
        <p style={styles.bookItem}>{this.props.book.pages}</p>
        <p style={styles.bookItem}>{this.props.book.read ? 'Read' : 'Not Read'}</p>
        <button onClick={() => this.setState({editBook: true})}>Edit</button>
      </div>
    )
  }

  displayEditBook() {
    return (
      <div>
        <input type="text" value={this.state.editTitle} onChange={e => this.setState({editTitle: e.target.value})} />
        <input type="text" value={this.state.editAuthor} onChange={e => this.setState({editAuthor: e.target.value})} />
        <input type="number" value={this.state.editPages} onChange={e => this.setState({editPages: e.target.value})} />
        <input type="checkbox" checked={this.state.editRead} onChange={e => this.setState({editRead: e.target.checked})} />
        <button onClick={e => {
          const index = [...e.target.parentElement.parentElement.children].indexOf(e.target.parentElement) - 1;

          const {editTitle, editAuthor, editPages, editRead} = this.state;
          if(!editTitle || !editAuthor || !editPages) return;


          this.props.submitBookEdit(index, editTitle, editAuthor, editPages, editRead);
          this.setState({editBook: false});
          }
          }>
          Submit
        </button>
        <button onClick={e => {
          const index = [...e.target.parentElement.parentElement.children].indexOf(e.target.parentElement) - 1;
          this.props.removeBookClick(index);
        }
        }>Delete</button>
      </div>
    )
  }

  render() {
    return this.state.editBook ? this.displayEditBook() : this.displayBookInfo();
  }
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
