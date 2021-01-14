import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as api from "../../api";
import "./Admin.css";
import Login from "../User/Login";

export default (props) => {
  const user = useSelector((state) => state.user);
  const [deleteField, setDeleteField] = useState("");
  const [createFields, setCreateFields] = useState({
    name: "",
    destination: "",
    startPoint: "",
    startDate: "",
    reachDate: "",
    price: "",
  });

  const createSubmit = (e) => {
    e.preventDefault();
    api.createTrain(
      createFields.name,
      createFields.destination,
      createFields.startPoint,
      createFields.startDate,
      createFields.reachDate,
      createFields.price
    );
    setCreateFields({
      name: "",
      destination: "",
      startPoint: "",
      startDate: "",
      reachDate: "",
      price: "",
    });
  };

  const deleteClick = (e) => {
    e.preventDefault();
    console.log(deleteField);
    api.deleteTrain(deleteField);
  };

  if (user.is_admin) {
    return (
      <div className="admin-container">
        <h1 id="welcome-admin">Welcome Administrator</h1>
        <form className="create-train-form">
          <h2> Create Train</h2>
          <input
            onChange={(e) =>
              setCreateFields({ ...createFields, name: e.target.value })
            }
            value={createFields.name}
            placeholder="Train Name"
            type="text"
          />
          <input
            onChange={(e) =>
              setCreateFields({ ...createFields, destination: e.target.value })
            }
            value={createFields.destination}
            placeholder="Destination"
            type="text"
          />
          <input
            onChange={(e) =>
              setCreateFields({ ...createFields, startPoint: e.target.value })
            }
            value={createFields.startPoint}
            placeholder="Start Point"
            type="text"
          />
          <input
            onChange={(e) =>
              setCreateFields({ ...createFields, startDate: e.target.value })
            }
            value={createFields.startDate}
            placeholder="Start Date"
            type="date"
          />
          <input
            onChange={(e) =>
              setCreateFields({ ...createFields, reachDate: e.target.value })
            }
            value={createFields.reachDate}
            placeholder="Reach Date"
            type="date"
          />
          <input
            onChange={(e) =>
              setCreateFields({ ...createFields, price: e.target.value })
            }
            value={createFields.price}
            placeholder="Price"
            type="text"
          />
          <button onClick={createSubmit}>Create</button>
        </form>
        <form className="delete-train-form">
          <h2>Delete Train</h2>
          <input
            value={deleteField}
            onChange={(e) => setDeleteField(e.target.value)}
            placeholder="Train ID"
            type="text"
          />
          <button onClick={deleteClick}>Delete</button>
        </form>
      </div>
    );
  } else if (user.name) {
    return <h1> Administrators only</h1>;
  } else {
    return <Login />;
  }
};
