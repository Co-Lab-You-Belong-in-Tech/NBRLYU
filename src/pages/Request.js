import { useState } from "react";
import Header from "../components/Header";
import Modal from "./Modal";

function Request({ setSelectedProvide, setSelectedRequest }) {
  const [submitReq, setSubmitReq] = useState(false);
  const handleCancel = () => {
    setSelectedRequest(false);
    setSelectedProvide(false);
  };
  const handleSubmit = () => {
    setSubmitReq(true);
  };
  return (
    <div className="wrapper">
      <Header />
      <h2>Ask for help</h2>
      <h3>Enter your details & shoutout for neighborly help!</h3>
      <form>
        <fieldset className="name-field">
          <label htmlFor="">First Name ⁕</label>
          <input type="text" required />
          <label htmlFor="">Last Name</label>
          <input type="text" />
        </fieldset>
        <fieldset className="task-dropdown">
          <label htmlFor="">Pick your task ⁕</label>
          <select name="" id="" required>
            <option value="" default>
              please pick one
            </option>
            <option value="">yard work</option>
            <option value="">cleaning</option>
            <option value="">cooking</option>
          </select>
        </fieldset>
        <fieldset className="task-description">
          <label htmlFor="">Describe your task (150 characters)</label>
          <textarea name="" id="" cols="5" rows="2" maxLength={150}></textarea>
        </fieldset>
        <fieldset className="zip-code">
          <label htmlFor="">Zip Code ⁕</label>
          <input type="text" required />
        </fieldset>
        <fieldset className="email-field">
          <label htmlFor="">Email ⁕</label>
          <input type="email" required />
        </fieldset>
        {/* <fieldset>
          <label htmlFor="">Upload photo (jpeg., tiff., png.) 🖇️</label>
        </fieldset> */}
        <div className="button-box">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>

      {submitReq ? <Modal setSubmitReq={setSubmitReq} /> : null}
    </div>
  );
}
export default Request;

//? Pseudo Code
//? the form will need to be stored in a database
//? the zip code should be used as a search parameter
//? the chore category should be used as another search parameter
