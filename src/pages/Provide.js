import { useNavigate } from "react-router-dom";
import cooking from "../assets/cooking.jpg";
import cleaning from "../assets/cleaning.jpg";
import yard from "../assets/yard.jpg";

function Provide() {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };
  return (
    <div className="wrapper">
      <form>
        <h2>Pass on the neighborly goodness</h2>
        <h3>Help your neighbor in your area of expertise</h3>
        <fieldset className="zip-code">
          <label htmlFor="">Enter your zipcode</label>
          <input
            type="text"
            inputmode="numeric"
            pattern="^(?(^00000(| -0000)) | (\d{5}(| -\d{4})))$"
          />
        </fieldset>
        <fieldset className="task-category">
          <p>Select a task category</p>
          <p>(Or more if you have the time)</p>
          <div className="task-choices">
            <div className="each-task">
              <input type="checkbox" />
              <label htmlFor="">
                <img src={cooking} alt="graphic of cooking" />
                <p>Cooking</p>
              </label>
            </div>
            <div className="each-task">
              <input type="checkbox" />
              <label htmlFor="">
                <img src={cleaning} alt="graphic of cleaning" />
                <p>Cleaning</p>
              </label>
            </div>
            <div className="each-task">
              <input type="checkbox" />
              <label htmlFor="">
                <img src={yard} alt="graphic of yard work" />
                <p>Yard Work</p>
              </label>
            </div>
          </div>
        </fieldset>
      </form>
      <div className="button-box">
        <button>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}
export default Provide;

//? Pseudo Code
//? Need an geolocation API to generate all zip codes within the 5 miles radius of the zip code entered in search input area
//? All these zip codes would be used to match any zip codes in the forms' zip codes in the database
//! Warning: a tag doesn't work in React, try Link or something else clickable
