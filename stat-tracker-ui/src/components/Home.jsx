import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="background" className="bg-filter">
        <div className="hero-outer">
          <div className="hero">
            <div className="hero-inner">
              <h1>Step into the world of Scottish football</h1>
              <p>The quickest way to view player stats and insights</p>
            </div>
            <Link to="/teams" className="hero-button">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
