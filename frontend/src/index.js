import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { styled } from "linaria/react"
import { createBrowserHistory } from "history"
import PrivateRoute from "./components/privateroute"
import NavBar from "./components/navbar"
import Dashboard from "./pages/dashboard"
import PrivateApi from "./pages/privateapi"
import { Auth0Provider, useAuth0 } from "./components/authwrapper"
import config from "../auth_config.json"

// A function that routes the user to the right place
// after login
const history = createBrowserHistory()
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
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute exact path="/api" component={PrivateApi} />
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
    audience={config.audience}
    onRedirectCallback={onRedirectCallback}>
    <Router history={history}>
      <App />
    </Router>
  </Auth0Provider>,
  document.getElementById("App")
)
