import "../styles/styles.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/teams">Teams</Link>
        <Link className="nav-brand" to="/home">
          StatHoose
        </Link>
        <Link to="/players">Players</Link>
      </nav>
    </>
  );
};

export default Nav;
