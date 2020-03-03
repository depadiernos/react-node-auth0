import React from "react";
import { Link } from "react-router-dom"
import { useAuth0 } from "./authwrapper";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        <Link to="/api">Api</Link>
    </div>
  );
};

export default NavBar;