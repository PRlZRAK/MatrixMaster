import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
function UserPage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const cookie = Cookies.get("user");
    const token = jwtDecode(cookie);
  }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users/5/posts")
      .then((res) => {
        localStorage.setItem("Posts", JSON.stringify(res.data.posts));
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <h1>
        Hello {user?.firstName} {user?.lastName}
      </h1>
      <Link to="/">Go to home</Link>
      <Link to="/Login">Go to login</Link>
      <Link to="/userPosts">Go to posts</Link>
    </div>
  );
}
export default UserPage;
