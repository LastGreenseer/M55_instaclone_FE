import React, { useState } from "react";
import { login } from "../../../utils/fetch";
import "./Login.css";

const Login = ({ handleChange, setShowLogin, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      console.log("Success", response);
      setIsLoggedIn(true);
      setShowLogin(false);
    } catch (error) {
      console.log("Error logging in", error);
    }
  };

  return (
    <div className="flex login">
      <form onSubmit={handleLoginSubmit} className="flex login">
        <h3>Log In</h3>
        <div>
          <input
            onChange={(e) => handleChange(e, setUsername)}
            type="text"
            placeholder="Username"
            value={username}
            required
          />
          <input
            onChange={(e) => handleChange(e, setPassword)}
            type="password"
            placeholder="Password"
            value={password}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
