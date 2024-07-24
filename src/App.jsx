import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import ImageContainer from "./components/imageContainer";
import Signup from "./components/logOrSign/signup/Signup";
import { registerUser } from "./utils/fetch";

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const handleChange = (e, setter, state) => {
    setter(e.target.value);
    console.log(state);
  };

  

  return (
    <>
      <Header setShowSignup={setShowSignup} />
      <h1>{import.meta.env.VITE_COOL_TEST}</h1>

      {showSignup ? (
        <Signup handleChange={handleChange} setShowSignup={setShowSignup} />
      ) : (
        <ImageContainer />
      )}

      <Footer />
    </>
  );
}

export default App;
