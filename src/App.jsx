import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ImageContainer from "./components/imageContainer";
import Signup from "./components/logOrSign/signup/Signup";
import Login from "./components/logOrSign/login/Login"

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  

  return (
    <>
      <Header setShowSignup={setShowSignup} setShowLogin={setShowLogin} isLoggedIn={isLoggedIn} />
      <h1>{import.meta.env.VITE_COOL_TEST}</h1>

      {showSignup && (
        <Signup handleChange={handleChange} setShowSignup={setShowSignup} />
      )}
      {showLogin && (
        <Login handleChange={handleChange} setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />
      )}
        <ImageContainer />
      

      <Footer />
    </>
  );
}

export default App;
