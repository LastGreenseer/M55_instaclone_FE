import React, { useState } from "react";
import { registerUser } from "../../../utils/fetch";
import "./Signup.css";

const Signup = ({ handleChange, setShowSignup  }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e, registerUser, username, email, password) => {
    e.preventDefault();
    try {
      const response = await registerUser(username, email, password);
      console.log("Success", response);
      setShowSignup(false);
    } catch (error) {
      console.error("Error sighing up", error);
    }
  };

  return (
    <div className="flexSignup">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e, registerUser, username, email, password);
        }}
        className="flexSignup"
      >
        <h3>Signup</h3>
        <div>
          <input
            onChange={(e) => handleChange(e, setUsername, username)}
            type="text"
            placeholder="Username..."
            value={username}
            required
          />
          <input
            onChange={(e) => handleChange(e, setEmail)}
            type="email"
            placeholder="email..."
            value={email}
            required
          />
          <input
            onChange={(e) => handleChange(e, setPassword)}
            type="password"
            placeholder="password..."
            value={password}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
