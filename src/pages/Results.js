import userPic from "../assets/userPic.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
function Results() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="wrapper">
        <Header />
        <h2>Select your neighborhood task</h2>

        <div className="result-box">
          <img src={userPic} alt="a person requesting help" />
          <div className="result-text">
            <h3 className="name">Naomi Watts</h3>
            <h4>Task description</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              fugit corporis quos aliquid consequuntur esse sapiente distinctio
              ipsum labore reprehenderit recusandae obcaecati dicta accusantium
              accusamus corrupti vel nostrum, modi explicabo.
            </p>
          </div>
        </div>
        <div className="result-box">
          <img src={userPic} alt="a person requesting help" />
          <div className="result-text">
            <h3 className="name">Naomi Watts</h3>
            <h4>Task description</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              fugit corporis quos aliquid consequuntur esse sapiente distinctio
              ipsum labore reprehenderit recusandae obcaecati dicta accusantium
              accusamus corrupti vel nostrum, modi explicabo.
            </p>
          </div>
        </div>
        <div className="result-box">
          <img src={userPic} alt="a person requesting help" />
          <div className="result-text">
            <h3 className="name">Naomi Watts</h3>
            <h4>Task description</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              fugit corporis quos aliquid consequuntur esse sapiente distinctio
              ipsum labore reprehenderit recusandae obcaecati dicta accusantium
              accusamus corrupti vel nostrum, modi explicabo.
            </p>
          </div>
        </div>
        <div className="button-box">
          <button onClick={goHome}>Done! I have all the info I need</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Results;
