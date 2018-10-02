import React from 'react'
import escapeRegExp from 'escape-string-regexp'


class Results extends React.Component {
  checkImage = (book) => {
    try {
      return `url(${book.imageLinks.smallThumbnail})`
    } catch (e) {
      console.log(e)
    }
  }

  authorsArray = (book) => {
    if (book.authors) {
      if (book.authors.length > 1) {
        return book.authors.join(', ')
      } else {
      return ('Author unknown')
      }
    } else {
      return ('Author unknown')
    }
  }
setBookValue(book) {
  const booksShelf= this.props.books.map( thisBook => (thisBook.id === book.id) ? thisBook.shelf : 'none').filter(result => result !== 'none')
  return  booksShelf.toString() !== '' ?  booksShelf.toString():'none'
}

  
  render() {
      let filteredSearch
      if (this.props.query) {
        let match = new RegExp(escapeRegExp(this.props.query), 'i')
        filteredSearch = this.props.booksSearched.filter( book => match.test(book.title))
      } else {
        filteredSearch = this.props.booksSearched
      }
    
    return (
      <ol className="books-grid">
      {filteredSearch.map( book => <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.checkImage(book) }}></div>
                            <div className="book-shelf-changer">
                              {/* change the book's category */}
                              <select  value={this.setBookValue(book)} onChange={(e) =>this.props.updateBook(book, e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                           <div className='book-info'>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{this.authorsArray(book)}</div>
                          </div>
                        </div>
                      </li>
            )}
        </ol>
    )
  }
}
  
  export default Results