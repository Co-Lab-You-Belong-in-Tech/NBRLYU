import "../styles/request.css";

function Request({ setSelectedProvide, setSelectedRequest }) {
  const handleCancel = () => {
    setSelectedRequest(false);
    setSelectedProvide(false);
  };
  return (
    <div className="wrapper">
      <h2>Bask in the neighboly goodness</h2>
      <form action="">
        <label htmlFor="">
          Enter your details & shoutout for neighborly help!
        </label>
        <fieldset>
          <label htmlFor="">First Name</label>
          <input type="text" required />
          <label htmlFor="">Last Name</label>
          <input type="text" />
        </fieldset>
        <fieldset>
          <label htmlFor="">Pick your task</label>
          <select name="" id="" required>
            <option value="" default>
              please pick one
            </option>
            <option value="">yard work</option>
            <option value="">cleaning</option>
            <option value="">cooking</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="">Describe your task (150 characters)</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            maxLength={150}
          ></textarea>
        </fieldset>
        <fieldset>
          <label htmlFor="">Zip Code</label>
          <input type="text" required />
        </fieldset>
        <fieldset>
          <label htmlFor="">Email</label>
          <input type="email" required />
        </fieldset>
        <fieldset>
          <label htmlFor="">Upload photo (jpeg., tiff., png.) 📎</label>
        </fieldset>
        <button>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}
export default Request;

//? Pseudo Code
//? the form will need to be stored in a database
//? the zip code should be used as a search parameter
//? the chore category should be used as another search parameter
