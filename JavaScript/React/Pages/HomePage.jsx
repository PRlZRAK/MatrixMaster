import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function HomePage() {
  const [newUser, setNewUser] = useState({
    name: "",
    password: "",
    email: "",
    jobTitle: "",
    confpassword: "",
  });
  const [user, setUser] = useState({ password: "", email: "" });
  const [error, setError] = useState("");
  const ChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };
  const LoginChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (
      newUser.name !== "" &&
      newUser.email !== "" &&
      newUser.password !== "" &&
      newUser.confpassword !== "" &&
      newUser.jobTitle !== ""
    ) {
      if (newUser.password === newUser.confpassword) {
        const users = JSON.parse(localStorage.getItem("Users")) || [];
        if (!users.some((u) => u.email === newUser.email)) {
          users.push(newUser);
          localStorage.setItem("Users", JSON.stringify(newUser));
        } else {
          setError("User already exists");
        }
      } else {
        setError("Passwords do not match");
      }
    } else {
      setError("Please fill all fields");
    }
  };

  const LoginSubmitHandler = (e) => {
    e.preventDefault();
    if (user.email !== "" && user.password !== "") {
      const users = JSON.parse(localStorage.getItem("Users")) || [];
      if (
        users.some(
          (u) => u.email === user.email && u.password === user.password
        )
      ) {
        localStorage.setItem("Logged", JSON.stringify(user.email));
      } else {
        setError("Invalid email or password");
      }
    } else {
      setError("Please fill all fields");
    }
  };
  return (
    <div>
      <div className="Signup">
        <form onsubmit={SubmitHandler}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={ChangeHandler}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={ChangeHandler}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={newUser.password}
            onChange={ChangeHandler}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            name="confpassword"
            value={newUser.confpassword}
            onChange={ChangeHandler}
          />
          <label>Job Title</label>
          <input
            type="text"
            name="job"
            value={newUser.job}
            onChange={ChangeHandler}
          />
          <button>Submit</button>
        </form>
      </div>

      <div className="Login">
        <form onsubmit={LoginSubmitHandler}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={LoginChangeHandler}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={LoginChangeHandler}
          />
          <button>Submit</button>
        </form>
      </div>
      <h1>Welcom to linked in in a social network for professionals</h1>
      <Link to="/Login">Go to login</Link>
    </div>
  );
}

export default HomePage;
