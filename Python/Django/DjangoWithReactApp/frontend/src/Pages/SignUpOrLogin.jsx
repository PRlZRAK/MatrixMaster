import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUpOrLogin() {
  const navigate = useNavigate();
  const [signuperrors, setErrors] = useState({
    username: "",
    job: "",
  });
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "", //job
  });
  const [password2, setPassword2] = useState("");

  const [loginform, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const validateForm = () => {
    let isValid = true;
    const errors = {};
    if (/\d/.test(form.username)) {
      errors.username = "Name must not contain numbers";
      isValid = false;
    }
    if (form.username.length < 4) {
      errors.username = "Name must be at least 4 characters";
      isValid = false;
    }
    if (/\d/.test(form.first_name)) {
      errors.job = "Job title must not contain numbers";
      isValid = false;
    }
    if (form.first_name.length < 14) {
      errors.job = "Job title must be at least 14 characters";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    if (form.password !== password2) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:8000/api/accounts/", form);
      const res = await axios.post("http://localhost:8000/api/login/", {
        username: form.username,
        password: form.password,
      });

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      navigate("/members");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const handleLoginChange = (e) => {
    setLoginForm({
      ...loginform,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/login/",
        loginform
      );

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      navigate("/members");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <p>{signuperrors.username}</p>
        <p>{signuperrors.job}</p>
        <input
          name="username"
          placeholder="your name..."
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="first_name"
          placeholder="your job..."
          value={form.first_name}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="repeat password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
        />
        <button type="submit">SignUp</button>
      </form>
      <form onSubmit={handleLoginSubmit}>
        <h2>Log in</h2>
        <input
          name="username"
          placeholder="username"
          value={loginform.email}
          onChange={handleLoginChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={loginform.password}
          onChange={handleLoginChange}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
