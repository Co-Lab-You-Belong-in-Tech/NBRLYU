import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import { zipcodes } from "zipcodes";
import cooking from "../assets/cooking.jpg";
import cleaning from "../assets/cleaning.jpg";
import yard from "../assets/yard.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import firebase from "../firebase";

import { ref, onValue, getDatabase } from "firebase/database";

function Provide() {
  const [zipCode, setZipCode] = useState("");
  const [cookingCb, setCookingCb] = useState(false);
  const [cleaningCb, setCleaningCb] = useState(false);
  const [yardworkCb, setYardworkCb] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const database = getDatabase(firebase);
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (zipCode.length !== 5 && zipCode !== /^[0-9\b]+$/) {
      alert("Please enter a valid zip code!");
    } else {
      let zipcode = require("zipcodes");
      let rad = zipcode.radius(zipCode, 5);

      if (cookingCb === false && cleaningCb === false && yardworkCb === false) {
        alert("Please select at least one category!");
      } else {
        console.log(rad);
        const dbRef = ref(database, `${selectedCategory}`);
        onValue(dbRef, (snapshot) => {
          const categorizedReqs = snapshot.val();
          console.log(categorizedReqs);

          const matchingReqs = rad.filter((matchingReq) =>
            categorizedReqs.hasOwnProperty(matchingReq)
          );

          //console.log(categorizedReqs[matchingReqs]);
          const toLocalData = categorizedReqs[matchingReqs];
          console.log(toLocalData);
          localStorage.setItem("matchedReqs", JSON.stringify(toLocalData));
        });
        navigate("/results");
      }
    }
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
              type="number"
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
                  onChange={(e) => setSelectedCategory(e.target.id)}
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
                  onChange={(e) => setSelectedCategory(e.target.id)}
                />
                <label htmlFor="cleaning">
                  <img src={cleaning} alt="graphic of cleaning" />
                  <p>Cleaning</p>
                </label>
              </div>
              <div className="each-task">
                <input
                  id="yardwork"
                  type="checkbox"
                  onClick={() => setYardworkCb(!yardworkCb)}
                  onChange={(e) => setSelectedCategory(e.target.id)}
                />
                <label htmlFor="yardwork">
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
