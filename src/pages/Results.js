import userPic from "../assets/userPic.png";
function Results() {
  return (
    <div>
      <h2>Select your neighborhood task</h2>

      <div>
        <img src={userPic} alt="a picture of a person requesting help " />
        <h3 className="name">Naomi Watts</h3>
        <h4>Task description</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugit
          corporis quos aliquid consequuntur esse sapiente distinctio ipsum
          labore reprehenderit recusandae obcaecati dicta accusantium accusamus
          corrupti vel nostrum, modi explicabo.
        </p>
      </div>
    </div>
  );
}
export default Results;

//? Pseudo Code
//? conditional rendering if there are forms matching providers search criteria: zip code and chore categories or error message if there is none matched
