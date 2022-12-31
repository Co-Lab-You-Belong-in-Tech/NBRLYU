import Request from "./Request";
import { useNavigate } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
function SubmitReq() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="request-wrapper">
        <Request />
      </div>
      <div className="wrapper">
        <div className="submit-req-msg">
          <div onClick={backToHome}>
            <FaRegTimesCircle />
          </div>
          <div className="submit-req-text">
            <p>
              Your request has been submitted. If one of your neighbors picks up
              your request, you'll be contacted soon via email. If no one picks
              up your request within 10 days, it will be deleted. Please keep
              trying!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default SubmitReq;
