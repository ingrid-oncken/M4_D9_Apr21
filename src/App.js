import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import WarningSign from "./components/WarningSign"
// import MyBadge from "./components/MyBadge"
// import SingleBook from "./components/SingleBook"
import BookList from "./components/BookList"
import fantasyBooks from "./fantasyBooks.json"
import MyNav from "./components/MyNav"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Registration from "./components/Registration"

function App() {
  return (
    <div className="App">
      <Router>
        <MyNav />

        <header className="App-header">
          {/* <WarningSign text="Watch out again!" /> */}
          {/* <MyBadge text="NEW!!" color="info" /> */}
          {/* <SingleBook book={fantasyBooks[0]} /> */}
          <Route
            exact
            path="/"
            render={(routerProps) => (
              <BookList {...routerProps} books={fantasyBooks} />
            )}
          />

          <Route path="/registration" component={Registration} />
        </header>
      </Router>
    </div>
  )
}

export default App
