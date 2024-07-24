import React, { useState } from "react";
import { registerUser } from "../../../utils/fetch";
import "./Signup.css";

const Signup = ({ handleChange, handleSubmit, logOrSignSetters }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-column signup">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(
            e,
            registerUser,
            logOrSignSetters,
            username,
            email,
            password
          );
        }}
        className="flex flex-column signup"
      >
        <h3>Signup</h3>
        <div>
          <input
            onChange={(e) => handleChange(e, setUsername)}
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
