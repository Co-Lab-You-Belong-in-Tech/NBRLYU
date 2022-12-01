function Provide() {
  return (
    <div>
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
