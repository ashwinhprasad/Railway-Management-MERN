import "./trainitem.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { createBook } from "../../api/index";

const TrainItem = (props) => {
  const user = useSelector((state) => state.user);

  const buttonClick = async (e) => {
    e.preventDefault();
    const { data } = await createBook(user.id, props.train._id);
    console.log(data);
  };

  return (
    <div className="train-item">
      <h2 id="train-name">{props.train.name}</h2>
      <h3 id="start-destination">
        From : {props.train.startpoint} - To: {props.train.destination}
      </h3>
      <div id="date-book">
        <h3 id="startDate">
          Starting Date : {props.train.startDate.slice(0, 10)}
        </h3>
        <h3 id="price">Ticket Price: {props.train.price}rs</h3>
        <button onClick={buttonClick}>Book Now</button>
      </div>
    </div>
  );
};

export default TrainItem;
