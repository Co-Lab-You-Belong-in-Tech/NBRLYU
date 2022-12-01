function Request() {
  return (
    <div>
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
      </form>
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  );
}
export default Request;
