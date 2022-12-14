import Home from "./Home";
function Cancel() {
  return (
    <div className="wrapper">
      <div className="home-wrapper">
        <Home />
      </div>
      <div className="cancel-msg">
        <p>Your request has been cancelled. Hope to see you soon!</p>
      </div>
    </div>
  );
}
export default Cancel;
