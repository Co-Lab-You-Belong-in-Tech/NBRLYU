import charity from "../assets/charity.jpg";
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
      <div className="textBox">
        <h2>A network to give and receive neighborly help</h2>

        <button className="button" onClick={handleProvide}>
          Give Help
        </button>

        <button className="button" onClick={handleRequest}>
          Request Help
        </button>
      </div>
      <div className="imageBox">
        <img
          src={charity}
          alt="graphics of neighbours gather to help each other"
        />
      </div>
    </div>
  );
}
export default Home;
