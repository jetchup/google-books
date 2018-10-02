import React from 'react'
import * as BooksAPI from './BooksAPI'
import Results from './Results.js'
import { Link } from 'react-router-dom'

class Search extends React.Component {
  
  state = {
    query: '',
    booksSearched: []
  }
  
  ChangeQuery = (query) => {
    this.setState({ query: query}, this.UpdateQuery(query) )
  }

  UpdateQuery = (query) => {
      if (!query) {
        this.setState({
        booksSearched: []
        })
      } else {
         this.updateSearchedBook(query)
      }
  }

    updateSearchedBook = (query) => {
     if (query) {
     BooksAPI.search(query).then((bookSearching) => {
           this.setState({
          booksSearched: Object.values(bookSearching).map( x => x )
            })
          }).catch( reason => {
            console.error( 'Could not map search results: ' + reason )
          })
      }
    }
  
  render() {
    return(
      <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search" onClick={() => this.props.ChangeState()}>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={ (e) => this.ChangeQuery(e.target.value)}
                 />

              </div>
            </div>
            <div className="search-books-results">
              <Results query={this.state.query} booksSearched={this.state.booksSearched} props={this.props} updateBook={this.props.updateBook.bind(this)} books={this.props.books} updateSearchedBook={this.updateSearchedBook.bind(this)}/>
            </div>
          </div>
    )
  }
}

export default Search