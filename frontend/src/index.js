import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import { styled } from "linaria/react"

import PrivateRoute from "./components/privateroute"
import NavBar from "./components/navbar"
import Dashboard from "./pages/dashboard"
import { Auth0Provider, useAuth0 } from "./components/authwrapper"
import config from "../../auth_config.json"
import history from "./utils/history"

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState) => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname)
}

const App = () => {
  const { loading } = useAuth0()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Style>
      <NavBar />
      <h1>Hello World!</h1>
      <PrivateRoute exact path="/" component={Dashboard} />
    </Style>
  )
}

const Style = styled.div`
  text-align: center;
`

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}>
    <Router>
      <App />
    </Router>
  </Auth0Provider>,
  document.getElementById("App")
)
