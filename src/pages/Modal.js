import { useNavigate } from "react-router-dom";
function Modal() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/request");
  };
  return (
    <div className="modal-wrap display-none">
      <div className="modal">
        {/* <img src="" alt="" /> */}
        <p>Thank you for your submission!</p>
        <p>
          If someone picks up your chore, there will contact you by email.
          Please check your spam folder so you don't miss their email.
        </p>
        <p>
          If no one picks up your chore, your request will be deleted after 10
          days.
        </p>
        <button className="btn modal-class" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
}
export default Modal;
