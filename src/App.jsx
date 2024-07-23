import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ImageContainer from "./components/imageContainer";
import Signup from "./components/logOrSign/signup/Signup";
import { registerUser } from "./utils/fetch";

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e, registerUser, username, email, password) => {
    e.preventDefault();
    try {
      const responsr = await registerUser(username, email, password);
      console.log("Success", response);
      setShowSignup(false);
    } catch (error) {
      console.error("Error sighing up", error);
    }
  };

  return (
    <>
      <Header setShowSignup={setShowSignup} />
      <h1>{import.meta.env.VITE_COOL_TEST}</h1>

      {showSignup ? (
        <Signup handleChange={handleChange} handleSubmit={handleSubmit} />
      ) : (
        <ImageContainer />
      )}

      <Footer />
    </>
  );
}

export default App;
