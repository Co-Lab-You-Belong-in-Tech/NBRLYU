import "../styles/provide.css";
function Provide({ setSelectedProvide, setSelectedRequest }) {
  const handleCancel = () => {
    setSelectedRequest(false);
    setSelectedProvide(false);
  };
  return (
    <div className="wrapper">
      <h2>Pass on the neighborly goodness</h2>
      <form action="">
        <fieldset>
          <label htmlFor="">Enter your zipcode</label>
          <input type="text" />
        </fieldset>
        <fieldset>
          <label htmlFor="">
            Select a task category (Or more if you have the time)
          </label>

          <a>
            <p>🍳</p>
            <p>Cooking</p>
          </a>
          <a>
            <p>🧹</p>
            <p>Cleaning</p>
          </a>
          <a>
            <p>🍂</p>
            <p>Yard Work</p>
          </a>
        </fieldset>
      </form>
      <button>Submit</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}
export default Provide;

//? Pseudo Code
//? Need an geolocation API to generate all zip codes within the 5 miles radius of the zip code entered in search input area
//? All these zip codes would be used to match any zip codes in the forms' zip codes in the database
//! Warning: a tag doesn't work in React, try Link or something else clickable
