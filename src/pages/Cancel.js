import Home from "./Home";
import { useNavigate } from "react-router-dom";
import { FaFontAwesome, FaRegTimesCircle } from "react-icons/fa";
function Cancel() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="home-wrapper">
        <Home />
      </div>
      <div className="wrapper">
        <div className="cancel-msg">
          <div onClick={goHome}>
            <FaRegTimesCircle />
          </div>
          <div className="cancel-text">
            <p>Your request has been cancelled. Hope to see you soon!</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cancel;
