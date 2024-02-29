import leagueLogo from "../assets/league-logo.png";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div>
          <img src={leagueLogo} alt="SPFL"></img>
        </div>
        <p>Welcome to</p>
        <p>the quickest way to view player stats in Scotland</p>
      </div>
    </>
  );
};

export default Home;
