import { useNavigate } from "react-router-dom";

function Warning() {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/request");
  };
  return (
    <div>
      <p>
        One or more required fields are not filled. Please complete the form
        then continue.
      </p>
      <button onClick={handleReturn}>Return</button>
    </div>
  );
}
export default Warning;
