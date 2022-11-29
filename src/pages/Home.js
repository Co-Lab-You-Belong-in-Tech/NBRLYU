import "../styles/home.css";
function Home() {
  return (
    <div className="wrapper">
      <h2>A network to give and receive neighboly help</h2>
      <div className="selectField">
        <div className="select">
          <h3>pass on the neighborly goodness</h3>
          <button className="button">Give Help</button>
        </div>
        <div className="select">
          <h3>Bask in the neighborly goodness</h3>
          <button className="button">Request Help</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
