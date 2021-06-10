import { Nav, Navbar, Button } from "react-bootstrap"
import { withRouter } from "react-router-dom"

const MyNav = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
      <Nav.Link href="/registration"> Register Here</Nav.Link>
      {/* <Link to=''> */}

      <Button variant="dark">register</Button>
    </Navbar.Collapse>
  </Navbar>
)
export default withRouter(MyNav)
