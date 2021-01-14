import { useState } from "react";
import { login } from "../../actions/user";
import { useDispatch } from "react-redux";
import "./Login.css";

export default () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onEmailChange = (e) => {
    e.preventDefault();
    setForm({
      email: e.target.value,
      password: form.password,
    });
  };

  const onPasswordChange = (e) => {
    e.preventDefault();
    setForm({
      email: form.email,
      password: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form.email, form.password));
    setForm({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h3>Login</h3>
        <input
          value={form.email}
          onChange={onEmailChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={form.password}
          onChange={onPasswordChange}
          type="password"
          placeholder="Password"
        />
        <button onClick={onSubmit}>Login</button>
      </form>
    </div>
  );
};
