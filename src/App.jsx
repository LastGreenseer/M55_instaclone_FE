import "./App.css";
import Header from "./components/header"
import Footer from "./components/footer";
import ImageContainer from "./components/imageContainer";

function App() {
  return (
    <>
      <Header />
      <h1>{import.meta.env.VITE_COOL_TEST}</h1>
      
      <ImageContainer />
      <Footer />
    </>
  );
}

export default App;
