import { useState } from "react"
import SingleBook from "./SingleBook"
import { Col, Container, Form, Row } from "react-bootstrap"
import CommentArea from "./CommentArea"

const BookList = ({ books }) => {
  //only 2 state variables = 2 hooks

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBook, setSelectedBook] = useState("null")

  // state = {
  //     searchQuery: '',
  //     selectedBook: null
  // }

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {books
              .filter((b) => b.title.toLowerCase().includes(searchQuery))
              .map((b) => (
                <Col xs={3} key={b.asin}>
                  <SingleBook
                    book={b}
                    selectedBook={selectedBook}
                    changeSelectedBook={(asin) => setSelectedBook(asin)}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={this.state.selectedBook} />
        </Col>
      </Row>
    </Container>
  )
}

export default BookList
