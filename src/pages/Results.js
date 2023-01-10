import userPic from "../assets/userPic.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
function Results() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  const retrievedData = JSON.parse(sessionStorage.getItem("matchedReqs"));
  console.log(retrievedData);
  return (
    <div className="wrapper">
      <Header />
      <h2>Select your neighborhood task</h2>
      {Object.keys(retrievedData)?.map((key) => {
        return (
          <div key={key} className="result-box">
            <img src={userPic} alt="a person requesting help" />
            <div className="result-text">
              <h3 className="name">{retrievedData[key].firstName}</h3>
              <h4>Task description</h4>
              <article>
                {retrievedData[key].description}
                <p>{retrievedData[key].email}</p>
              </article>
            </div>
          </div>
        );
      })}
      : alert("no matched find")
      <div className="button-box">
        <button onClick={goHome}>Done! I have all the info I need</button>
      </div>
      <Footer />
    </div>
  );
}
export default Results;
