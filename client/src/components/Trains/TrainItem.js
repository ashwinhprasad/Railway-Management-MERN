import "./trainitem.css";
import { Link } from "react-router-dom";
import TrainDetail from "./TrainDetail";

const TrainItem = (props) => {
  return (
    <div className="train-item">
      <Link to={`/train/${props.train._id}`} id="train-name">
        {props.train.name}
      </Link>
    </div>
  );
};

export default TrainItem;
