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
            <article>
              I need help with raking my leaves. It needs to be done by Monday,
              Dec 19th, 2022. I estimate it will take 2 people about 2 hours.
              Tools provided.
              <p>Email: newneighbor@hotmail.com</p>
            </article>
          </div>
        </div>
        <div className="result-box">
          <img src={userPic} alt="a person requesting help" />
          <div className="result-text">
            <h3 className="name">Naomi Watts</h3>
            <h4>Task description</h4>
            <article>
              I need some cooking help for dinner this Tuesday (the 20th). Any
              frozen meals, homemade or store-bought, for 1 person would be
              greatly appreciated.
            </article>
            <p>Email: aperson@yahoo.com</p>
          </div>
        </div>
        <div className="result-box">
          <img src={userPic} alt="a person requesting help" />
          <div className="result-text">
            <h3 className="name">Naomi Watts</h3>
            <h4>Task description</h4>
            <article>
              I need help cleaning up some spills (liquid detergent) under the
              washer. No heavy lifting (washer is easily movable), tools
              provided, not urgent.
            </article>
            <p>Email: someone@needshelp.com</p>
          </div>
        </div>
        <div className="result-button-box">
          <button onClick={goHome}>Done! I have all the info I need</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Results;
