import Home from "./components/Home.jsx";
import Nav from "./components/nav.jsx";
import "./styles/styles.css";

const App = () => {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <Home></Home>
    </>
  );
};

export default App;
