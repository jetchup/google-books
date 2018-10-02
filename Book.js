import React from 'react'


class Book extends React.Component {
  render() {
    function getImage(book) {
    if (book.imageLinks.smallThumbnail) {
      return (`url(${book.imageLinks.smallThumbnail})`)
    } else {
      return ''
    } 
    }
    return (
      <div>
      <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books.map( book =>  (book.shelf=== 'currentlyReading') ?
                       <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: getImage(book) }}></div>
                            <div className="book-shelf-changer">
                              {/* change the book's category */}
                              <select value={book.shelf} onChange={(e) => this.props.updateBook(book, e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">Delete</option>
                              </select>
                            </div>
                          </div>
                          <div className='book-info'>
                            <div className="book-title">{book.title}</div>  
                            <div className="book-authors">{book.authors.join(', ')}</div>
                          </div>
                        </div>
                      </li> : '')}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books.map( book => (book.shelf=== 'wantToRead') ? <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              {/* change the book's category */}
                              <select value={book.shelf} onChange={(e) => this.props.updateBook(book, e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">Delete</option>
                              </select>
                            </div>
                          </div>
                          <div className='book-info'>
                           <div className="book-title">{book.title}</div>  
                           <div className="book-authors">{book.authors.join(', ')}</div>
                        </div>
                        </div>
                      </li> : '')}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books.map( book => (book.shelf=== 'read') ? <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              {/* change the book's category */}
                              <select value={book.shelf} onChange={(e) => this.props.updateBook(book, e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">Delete</option>
                              </select>
                            </div>
                          </div>
                          <div className='book-info'>
                           <div className="book-title">{book.title}</div>  
                           <div className="book-authors">{book.authors.join(', ')}</div>
                          </div>
                        </div>
                      </li> : '')}
                    </ol>
                  </div>
                </div>
              </div>
      
    )
  }
}
  
  export default Book