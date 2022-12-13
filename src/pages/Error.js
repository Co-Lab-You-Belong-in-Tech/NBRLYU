import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="wrapper error-page">
      <h2 className="error-title">404!</h2>
      <p className="error-msg">An error has occured!</p>
      <Link to={`/`}>Go back home!</Link>
    </div>
  );
}
export default Error;
