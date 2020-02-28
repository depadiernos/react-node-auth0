import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import { styled } from "linaria/react"

import Auth from "./pages/auth"
import Dashboard from "./pages/dashboard"

const App = () => {
  return (
    <Style>
      <h1>Hello World!</h1>
      <Route exact path="/" component={Dashboard} />
      <Route path="/auth" component={Auth} />
    </Style>
  )
}

const Style = styled.div`
  text-align: center;
`

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("App")
)
