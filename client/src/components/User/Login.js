import { useState } from "react";
import { login } from "../../actions/user";
import { useDispatch } from "react-redux";

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
    <div>
      <form>
        <input value={form.email} onChange={onEmailChange} type="email" />
        <input
          value={form.password}
          onChange={onPasswordChange}
          type="password"
        />
        <button onClick={onSubmit}>Login</button>
      </form>
    </div>
  );
};
