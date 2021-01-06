import { useState, useEffect } from "react";
import axios from "axios";
import { getTrains } from "../../actions/trains";

const TrainDetail = (props) => {
  const [train, setTrain] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/train/${props.match.params.id}`)
      .then((res) => {
        setTrain(res.data);
      });
  }, []);

  if (train) {
    return <h1>{train.name}</h1>;
  } else {
    return <h1>No Train Available</h1>;
  }
};

export default TrainDetail;
