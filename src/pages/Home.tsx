import fortexLogo from "../img/fortex-logo.png";
const Home = () => {
  return (
    <section className="main-layout">
      <div className="home-welcome">
        <h1 className="home-welcome-h1">WELCOME TO FORTEX</h1>
        <img className="fortex-logo" src={fortexLogo} alt="Fortex Logo" />
      </div>
    </section>
  );
};
export default Home;
