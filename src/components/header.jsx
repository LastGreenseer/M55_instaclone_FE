import React from "react";

const Header = ({ setShowSignup, setShowLogin, isLoggedIn}) => {
  return (
    <header>
      <h1>InstaClone</h1>
      <nav>
        <ul>
          {isLoggedIn ? (
            <li>Welcome</li>
          ) : (
            <>
          <li>
            <button onClick={() => setShowSignup(true)}>Sign Up</button>
          </li>
          <li>
            <button onClick={() => setShowLogin(true)}>Log In</button>
          </li>
          </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
