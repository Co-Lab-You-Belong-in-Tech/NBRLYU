import { useNavigate } from "react-router-dom";
import cooking from "../assets/cooking.jpg";
import cleaning from "../assets/cleaning.jpg";
import yard from "../assets/yard.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Provide() {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };
  const handleSubmit = () => {
    navigate("/results");
  };
  return (
    <div className="page-wrapper">
      <div className="wrapper">
        <Header />
        <form>
          <h2>Pass on the neighborly goodness</h2>
          <h3>Help your neighbor in your area of expertise</h3>
          <fieldset className="zip-code">
            <label htmlFor="zip-code">Enter your zipcode</label>
            <input id="zip-code" type="number" min="0" required />
          </fieldset>
          <fieldset className="task-category">
            <p>Select a task category</p>
            <p>(Or more if you have the time)</p>
            <div className="task-choices">
              <div className="each-task">
                <input id="cooking" type="checkbox" />
                <label htmlFor="cooking">
                  <img src={cooking} alt="graphic of cooking" />
                  <p>Cooking</p>
                </label>
              </div>
              <div className="each-task">
                <input id="cleaning" type="checkbox" />
                <label htmlFor="cleaning">
                  <img src={cleaning} alt="graphic of cleaning" />
                  <p>Cleaning</p>
                </label>
              </div>
              <div className="each-task">
                <input id="yardwork" type="checkbox" />
                <label htmlFor="yardwork">
                  <img src={yard} alt="graphic of yard work" />
                  <p>Yard Work</p>
                </label>
              </div>
            </div>
          </fieldset>
        </form>
        <div className="provide-button-box">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Provide;
