import "./Signup.css";
import { useState } from "react";
import { register } from "../../api";

export default () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });

  const nameChange = (e) => {
    e.preventDefault();
    setFields({
      name: e.target.value,
      email: fields.email,
      phone: fields.phone,
      password: fields.password,
      confirm: fields.confirm,
    });
  };

  const emailChange = (e) => {
    e.preventDefault();
    setFields({
      name: fields.name,
      email: e.target.value,
      phone: fields.phone,
      password: fields.password,
      confirm: fields.confirm,
    });
  };

  const phoneChange = (e) => {
    e.preventDefault();
    setFields({
      name: fields.name,
      email: fields.email,
      phone: e.target.value,
      password: fields.password,
      confirm: fields.confirm,
    });
  };

  const passwordChange = (e) => {
    e.preventDefault();
    setFields({
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      password: e.target.value,
      confirm: fields.confirm,
    });
  };

  const confirmChange = (e) => {
    e.preventDefault();
    setFields({
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      password: fields.password,
      confirm: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (fields.password == fields.confirm) {
      register(fields.name, fields.email, fields.password, fields.phone);
    } else {
      console.log("passwords don't match");
    }
  };

  return (
    <div className="signup-form">
      <input
        value={fields.name}
        onChange={nameChange}
        type="text"
        placeholder="Name"
      />
      <input
        value={fields.email}
        onChange={emailChange}
        type="text"
        placeholder="Email"
      />
      <input
        value={fields.phone}
        onChange={phoneChange}
        type="text"
        placeholder="Phone No"
      />
      <input
        value={fields.password}
        onChange={passwordChange}
        type="password"
        placeholder="Password"
      />
      <input
        value={fields.confirm}
        onChange={confirmChange}
        type="password"
        placeholder="Confirm Password"
      />
      <button onClick={onSubmit}>Register</button>
    </div>
  );
};
