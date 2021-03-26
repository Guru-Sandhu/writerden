import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = (props) => {
  const { currentUser, signOut } = props

  return (
    <div className="ui secondary pointing menu">
      <NavLink exact to="/" className="item">
        Home
      </NavLink>
      <NavLink exact to="/posts/new" className="item">
        New Post
      </NavLink>
      <div className="right menu">
        { !currentUser && <NavLink to='/sign_in' className="ui blue button" >Sign In</NavLink> }
        { currentUser && (
          <>
            <NavLink exact to='/profile' className="item">Hello {currentUser.first_name}</NavLink>
            <NavLink className="ui small red button" to="/" onClick={signOut}>
              Sign Out
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};