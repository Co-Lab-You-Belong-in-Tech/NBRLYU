import { useNavigate } from "react-router-dom";
import { useState } from "react";
import firebase from "../firebase";
import { getDatabase, ref, push } from "firebase/database";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Request() {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/cancelreq");
  };

  const [firstName, setFirstName] = useState("");
  const [taskSelect, setTaskSelect] = useState("placeholder");
  const [taskDetail, setTaskDetail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");

  // * onClick on submit button, push that state to the stateless version of the each input field array
  const submitForm = (e) => {
    e.preventDefault();

    // * Create references to the database
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    // * Put user input of each input field in an object that can be pushed to the firebase
    let formObjToPush = {
      "First Name": firstName,
      "Task Category": taskSelect,
      "Task Detail": taskDetail,
      "Zip Code": zipCode,
      Email: email,
    };

    // * Push the object to firebase
    push(dbRef, formObjToPush);
  };
  const handleSubmit = () => {
    if (taskSelect === "placeholder") {
      alert(
        "One of more required fields are empty, please fill them all to submit"
      );
    } else navigate("/submitReq");
  };
  return (
    <div className="page-wrapper">
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
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            {/* <label htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            /> */}
          </fieldset>
          <fieldset className="task-dropdown">
            <label htmlFor="task-list">Pick your task ⁕</label>
            <select
              id="task-list"
              value={taskSelect}
              onChange={(e) => setTaskSelect(e.target.value)}
              required
            >
              <option value="placeholder" disabled>
                Please pick one
              </option>
              <option required>cooking</option>
              <option required>cleaning</option>
              <option required>yard work</option>
            </select>
          </fieldset>
          <fieldset className="task-description">
            <label htmlFor="task-detail">
              Describe your task ⁕ (150 characters)
            </label>
            <textarea
              id="task-detail"
              cols="5"
              rows="2"
              maxLength={150}
              value={taskDetail}
              required
              onChange={(e) => setTaskDetail(e.target.value)}
            ></textarea>
          </fieldset>
          <fieldset className="zip-code">
            <label htmlFor="zip">Zip Code ⁕</label>
            <input
              id="zip"
              type="text"
              inputMode="numeric"
              pattern="^(?(^00000(| -0000)) | (\d{5}(| -\d{4})))$"
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
            <button onClick={(submitForm, handleSubmit)}>Submit</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default Request;
