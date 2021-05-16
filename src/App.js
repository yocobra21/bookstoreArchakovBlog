import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { setBooks } from './actions/books'

import { Menu } from './components'
import { BookCard } from './components'
import { Container } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'

function App({ isReady, books, setBooks }) {

  React.useEffect(() => {
    axios.get('/books.json')
      .then(({ data }) => {
        setBooks(data)
      })
  }, [])

  return (
    <>
      <Container>
        <Menu />

        <Card.Group itemsPerRow={4}>

            {
              !isReady ? 'Loading' : books.map(item => (
               <BookCard {...item} />
              ))
            }

        </Card.Group>


      </Container>



    </>
  )
}

const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
