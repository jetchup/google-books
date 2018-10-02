import React from 'react'
import * as BooksAPI from './BooksAPI'
import Search from './Search.js'
import Book from './Book.js'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then(bookArray =>  this.setState({books: bookArray}))
    }
  

  // try and update the book: code from previous revision
 updateBook(book, shelf) {
  BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf        
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }))     
})
 }


  ChangeState(){
      this.setState({ showSearchPage: false })
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
       <Route exact path='/search' render={() => (
        <Search props={this.state} books={this.state.books} currentlyReading={this.state.books.currentlyReading} updateBook={this.updateBook.bind(this)}  ChangeState={this.ChangeState.bind(this)}/>
       )} />
       <Route exact path='/' render={() => (
         <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Book books={this.state.books} updateBook={this.updateBook.bind(this)}/>
            </div>
            <div>
              <a href="https://www.freepik.com/free-photos-vectors/banner">Banner vector created by Layerace - Freepik.com</a>
            </div>
            <div className="open-search">
              <Link to='/search' onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
            </div>
          </div>
       )} />
      </div>

    )
  }
}

export default BooksApp
