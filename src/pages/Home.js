import landing from "../assets/landing.svg";
import logo from "../assets/logo.png";

// import { useState, useNavigate } from "react";

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
      <header>
        <img src={logo} alt="NBRLYU logo" />
        <h1>Neighbors helping neighbors</h1>
      </header>
      <div className="textBox">
        <p>
          A network to give and receive neighborly help. Improve your sense of
          community by providing help or asking for help.
        </p>

        <button className="button" onClick={handleProvide}>
          Give Help
        </button>

        <button className="button" onClick={handleRequest}>
          Request Help
        </button>
      </div>
      <div className="imageBox">
        <img
          src={landing}
          alt="graphics of neighbours gather to help each other"
        />
      </div>
    </div>
  );
}
export default Home;
