import "../styles/home.css";
import { useState, useNavigate } from "react";

function Home() {
  // const [selectBtn, setSelectBtn] = useState(false);
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/request");
  // };

  return (
    <div className="wrapper">
      <h2>A network to give and receive neighborly help</h2>
      <div className="selectField">
        <div className="select">
          <h3>pass on the neighborly goodness</h3>
          <button className="button" onClick={handleProvide}>
            Give Help
          </button>
        </div>
        <div className="select">
          <h3>Bask in the neighborly goodness</h3>
          <button className="button" onClick={handleRequest}>
            Request Help
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
