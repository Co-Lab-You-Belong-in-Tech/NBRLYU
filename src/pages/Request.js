import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Request() {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [taskSelect, setTaskSelect] = useState("");
  const [taskDetail, setTaskDetail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const allowSubmit = () => {
    return (
      firstName.length && taskSelect.length && zipCode.length && email.length
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!allowSubmit) {
      navigate("/warning");
    } else navigate("/modal");
  };
  return (
    <div className="wrapper">
      <h2>Ask for help</h2>
      <h3>Enter your details & shoutout for neighborly help!</h3>
      <form className="request-form">
        <fieldset className="name-field">
          <label htmlFor="first-name">First Name ⁕</label>
          <input
            id="first-name"
            type="text"
            placeholder="First Name"
            required
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
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
            <option defaultValue="placeholder">Please pick one</option>
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
            value={taskDetail}
            onChange={(e) => setTaskDetail(e.target.value)}
          ></textarea>
        </fieldset>
        <fieldset className="zip-code">
          <label htmlFor="zip">Zip Code ⁕</label>
          <input
            id="zip"
            type="zipcode"
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
          <button type="submit" onClick={handleSubmit} disabled={allowSubmit}>
            Submit
          </button>
          <button type="submit" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
export default Request;

//? Pseudo Code
//? the form will need to be stored in a database
//? the zip code should be used as a search parameter
//? the chore category should be used as another search parameter
