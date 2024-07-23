import React from "react";

const Header = ({ setShowSignup}) => {
  return (
    <header>
      <h1>InstaClone</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => setShowSignup(true)}>Sign Up</button>
          </li>
          <li>Log in</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
