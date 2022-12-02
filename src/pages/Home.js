import "../styles/home.css";
import { useState, useNavigate } from "react";

function Home({ setSelectedProvide, setSelectedRequest }) {
  // const [selectBtn, setSelectBtn] = useState(false);
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/request");
  // };

  const handleProvide = () => {
    setSelectedProvide(true);
    setSelectedRequest(false);
  };

  const handleRequest = () => {
    setSelectedRequest(true);
    setSelectedProvide(false);
  };

  return (
    <div className="wrapper">
      <h2>A network to give and receive neighborly help</h2>
      <div className="selectField">
        <div className="select">
          <h3>Pass on the neighborly goodness</h3>
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
