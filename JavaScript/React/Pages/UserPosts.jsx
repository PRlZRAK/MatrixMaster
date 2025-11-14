import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const userposts = JSON.parse(localStorage.getItem("Posts"));
    setPosts(userposts);
  }, []);
  console.log(posts);

  return (
    <div>
      {posts?.map((item) => (
        <div key={item.id} className="Post">
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
      <Link to="/">Go to home</Link>
      <Link to="/Login">Go to login</Link>
      <Link to="/userPage">Go to user page</Link>
    </div>
  );
}
export default UserPosts;
