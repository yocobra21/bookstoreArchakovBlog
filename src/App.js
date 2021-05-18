import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import * as booksActions from './actions/books'
import * as filterActions from './actions/filter'
import { bindActionCreators } from 'redux'
import { orderBy } from 'lodash'

import { Menu } from './components'
import { BookCard } from './components'
import { Container } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import { Filter } from './components'

function App({ isReady, books, filterBy, setBooks, setFilter }) {

  React.useEffect(() => {
    axios.get('/books.json')
      .then(({ data }) => {
        setBooks(data)
      })
  }, [])

  const sortBy = (books, filterBy) => {
    switch (filterBy) {
      case 'expensive':
        return orderBy(books, 'price', 'desc')
      case 'cheap':
        return orderBy(books, 'price', 'asc')
      case 'author':
        return orderBy(books, 'author', 'asc')
      default:
        return books
    }
  }

  return (
    <Container>
      <Menu />
      <Filter setFilter={setFilter} />

      <Card.Group itemsPerRow={4}>

        {
          !isReady ? 'Loading' : sortBy(books, filterBy).map((item) => (
            <BookCard key={item.id} {...item} />
          ))
        } 

      </Card.Group>
    </Container>
  )
}

const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady,
  filterBy: books.filterBy
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch),
  ...bindActionCreators(filterActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
