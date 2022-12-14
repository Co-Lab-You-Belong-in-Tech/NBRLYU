import landing from "../assets/landing.svg";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  const handleProvide = () => {
    navigate("/provide");
  };

  const handleRequest = () => {
    navigate("/request");
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="main-container">
        <div className="text-box">
          <h1>Neighbors helping neighbors</h1>
          <p>
            A network to give and receive neighborly help. Improve your sense of
            community by providing help or asking for help.
          </p>
          <div className="button-box">
            <button className="button" onClick={handleProvide}>
              Give Help
            </button>

            <button className="button" onClick={handleRequest}>
              Request Help
            </button>
          </div>
        </div>
        <div className="image-box">
          <img
            src={landing}
            alt="graphics of neighbours gather to help each other"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
