import * as api from "../../api";
import "./BookDetail.css";
import { useEffect, useState } from "react";

export default (props) => {
  const [train, setTrain] = useState({});

  useEffect(() => {
    api
      .getTrain(props.book.train)
      .then((res) => setTrain(res))
      .catch((err) => console.log(err));
  }, [setTrain]);

  return (
    <div className="book-detail-item">
      <h3>{train.name}</h3>
      <button
        onClick={props.onDelete.bind(this, props.book._id)}
        id="delete-button"
      >
        Delete
      </button>
    </div>
  );
};
