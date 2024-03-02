import Home from "./components/Home.jsx";
import Footer from "./components/footer.jsx";
import Nav from "./components/nav.jsx";
import Players from "./components/player.jsx";
import Teams from "./components/teams.jsx";
import "./styles/styles.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
