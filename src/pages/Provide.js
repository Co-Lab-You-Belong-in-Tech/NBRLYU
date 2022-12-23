import { useNavigate } from "react-router-dom";
import { useState } from "react";
import cooking from "../assets/cooking.jpg";
import cleaning from "../assets/cleaning.jpg";
import yard from "../assets/yard.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Provide() {
  const [zipCode, setZipCode] = useState("");
  const [cookingCb, setCookingCb] = useState(false);
  const [cleaningCb, setCleaningCb] = useState(false);
  const [yardworkCb, setYardworkCb] = useState(false);
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (zipCode.length <= 5) {
      alert("Please enter a valid zip code!");
    } else return zipCode;
    if (cookingCb === false && cleaningCb === false && yardworkCb === false) {
      alert("Please select at least one category!");
    } else navigate("/results");
  };

  return (
    <div className="page-wrapper">
      <div className="wrapper">
        <Header />
        <form>
          <h2>Pass on the neighborly goodness</h2>
          <h3>Help your neighbor in your area of expertise</h3>
          <fieldset className="zip-code">
            <label required htmlFor="zip-code">
              Enter your zipcode ⁕
            </label>
            <input
              id="zip-code"
              type="text"
              value={zipCode}
              onChange={(e) => {
                setZipCode(e.target.value);
              }}
              required
            />
          </fieldset>
          <fieldset className="task-category">
            <p>Select a task category ⁕</p>
            <p>(Or more if you have the time)</p>
            <div className="task-choices">
              <div className="each-task">
                <input
                  id="cooking"
                  type="checkbox"
                  onClick={() => setCookingCb(!cookingCb)}
                />
                <label htmlFor="cooking">
                  <img src={cooking} alt="graphic of cooking" />
                  <p>Cooking</p>
                </label>
              </div>
              <div className="each-task">
                <input
                  id="cleaning"
                  type="checkbox"
                  onClick={() => setCleaningCb(!cleaningCb)}
                />
                <label htmlFor="cleaning">
                  <img src={cleaning} alt="graphic of cleaning" />
                  <p>Cleaning</p>
                </label>
              </div>
              <div className="each-task">
                <input
                  id="yard"
                  type="checkbox"
                  onClick={() => setYardworkCb(!yardworkCb)}
                />
                <label htmlFor="yard">
                  <img src={yard} alt="graphic of yard work" />
                  <p>Yard Work</p>
                </label>
              </div>
            </div>
          </fieldset>
        </form>
        <div className="button-box">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Provide;

//? Pseudo Code
//? Need an geolocation API to generate all zip codes within the 5 miles radius of the zip code entered in search input area
//? All these zip codes would be used to match any zip codes in the forms' zip codes in the database
//! Warning: a tag doesn't work in React, try Link or something else clickable
