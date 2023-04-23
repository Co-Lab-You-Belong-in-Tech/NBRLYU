//import userPic from "../assets/userPic.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import DisplayResults from "../components/DisplayResults";

function Results() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  // const displayResults = () => {
  //   const retrievedData = JSON.parse(localStorage.getItem("matchedReqs"));
  //   console.log(retrievedData);
  //   if (!retrievedData) {
  //     alert("No matched request found!");
  //   } else {
  //     Object.keys(retrievedData).map((key) => {
  //       return (
  //         <div key={key} className="result-box">
  //           <img src={userPic} alt="a person requesting help" />
  //           <div className="result-text">
  //             <h3 className="name">{retrievedData[key].firstName}</h3>
  //             <h4>Task description</h4>
  //             <article>
  //               <p>{retrievedData[key].description}</p>
  //               <p>{retrievedData[key].email}</p>
  //             </article>
  //           </div>
  //         </div>
  //       );
  //     });
  //   }
  // };
  //console.log(sessionStorage.getItem("matchedReqs"));
  //console.log(retrievedData);

  // {Object.keys(retrievedData)?.map((key) => {
  //       return (
  //         <div key={key} className="result-box">
  //           <img src={userPic} alt="a person requesting help" />
  //           <div className="result-text">
  //             <h3 className="name">{retrievedData[key].firstName}</h3>
  //             <h4>Task description</h4>
  //             <article>
  //               {retrievedData[key].description}
  //               <p>{retrievedData[key].email}</p>
  //             </article>
  //           </div>
  //         </div>
  //       );

  //     })
  //     : alert("no matched requests found");
  //   }

  return (
    <div className="wrapper">
      <Header />
      <h2>Select your neighborhood task</h2>
      <DisplayResults />
      {/* {displayResults()} */}
      <div className="button-box">
        <button onClick={goHome}>Done! I have all the info I need</button>
      </div>
      <Footer />
    </div>
  );
}

export default Results;
