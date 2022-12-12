import { useState, useEffect } from "react";
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [taskSelect, setTaskSelect] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="wrapper">
      <Header />
      <h2>Ask for help</h2>
      <h3>Enter your details & shoutout for neighborly help!</h3>
      <form className="request-form">
        <fieldset className="name-field">
          <label htmlFor="first-name">First Name ⁕</label>
          <input
            id="first-name"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            id="last-name"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </fieldset>
        <fieldset className="task-dropdown">
          <label htmlFor="task-list">Pick your task ⁕</label>
          <select
            id="task-list"
            value={taskSelect}
            onChange={(e) => setTaskSelect(e.target.value)}
            required
          >
            <option default required>
              please pick one
            </option>
            <option>yard work</option>
            <option>cleaning</option>
            <option>cooking</option>
          </select>
        </fieldset>
        <fieldset className="task-description">
          <label htmlFor="task-detail">
            Describe your task (150 characters)
          </label>
          <textarea
            id="task-detail"
            cols="5"
            rows="2"
            maxLength={150}
          ></textarea>
        </fieldset>
        <fieldset className="zip-code">
          <label htmlFor="zip">Zip Code ⁕</label>
          <input
            id="zip"
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </fieldset>
        <fieldset className="email-field">
          <label htmlFor="email">Email ⁕</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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
