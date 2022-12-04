import "../styles/provide.css";
function Provide() {
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

          <div>Cooking</div>
          <div>Cleaning</div>
          <div>Yard Work</div>
        </fieldset>
      </form>
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  );
}
export default Provide;

//? Pseudo Code
//? Need an geolocation API to generate all zip codes within the 5 miles radius of the zip code entered in search input area
//? All these zip codes would be used to match any zip codes in the forms' zip codes in the database
