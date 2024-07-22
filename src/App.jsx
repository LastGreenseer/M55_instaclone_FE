import "./App.css";
import Header from "./components/header"

function App() {
  return (
    <>
      <Header />
      <h1>{import.meta.env.VITE_COOL_TEST}</h1>
    </>
  );
}

export default App;
