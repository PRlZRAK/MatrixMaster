import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
function LoginPage() {
  const [user, setUser] = useState({ username: "", password: "" });

  const ChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://dummyjson.com/users/login", user)
      .then((res) => {
        // const token = jwtDecode(res.data.accessToken);
        Cookies.set("user", res.data.accessToken);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <label>User name</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={ChangeHandler}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={ChangeHandler}
        />
        <button>Submit</button>
      </form>
      <Link to="/">Go to home</Link>
      <Link to="/Login">Go to login</Link>
      <Link to="/userPage">Go to user page</Link>
    </div>
  );
}
export default LoginPage;
