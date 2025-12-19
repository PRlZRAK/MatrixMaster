import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Members() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/accounts/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access")}`,
            },
          }
        );
        setData(response.data);
      } catch (err) {
        navigate("/");
      }
    };

    fetchData();
  }, [navigate]);
  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <h1>LinkedIn Members:</h1>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            <h1>{item.username}</h1>
            <Link to={`/profile/${item.id}`}>View Profile</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
