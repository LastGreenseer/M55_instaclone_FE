import React from "react";

const Header = ({ setShowSignup, setShowLogin}) => {
  return (
    <header>
      <h1>InstaClone</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => setShowSignup(true)}>Sign Up</button>
          </li>
          <li>
            <button onClick={() => setShowLogin(true)}>Log In</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
