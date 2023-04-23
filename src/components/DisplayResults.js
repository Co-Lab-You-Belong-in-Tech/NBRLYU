import userPic from "../assets/userPic.png";
const DisplayResults = () => {
  const retrievedData = JSON.parse(localStorage.getItem("matchedReqs"));
  console.log(retrievedData);
  if (retrievedData) {
    return Object.keys(retrievedData).map((key) => {
      return (
        <div key={key} className="result-box">
          <img src={userPic} alt="a person requesting help" />
          <div className="result-text">
            <h3 className="name">{retrievedData[key].firstName}</h3>
            <h4>Task description</h4>
            <article>
              <p>{retrievedData[key].description}</p>
              <p>{retrievedData[key].email}</p>
            </article>
          </div>
        </div>
      );
    });
  } else {
    return <p>"No Matched"</p>;
  }
};
export default DisplayResults;
