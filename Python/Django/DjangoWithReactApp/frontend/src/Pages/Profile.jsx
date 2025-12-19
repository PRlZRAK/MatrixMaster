import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/accounts/${id}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      })
      .then((res) => setProfile(res.data))
      .catch((err) => {
        console.error(err);
        navigate("/");
      });
  }, [id, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/");
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => navigate("/members")}>Back to Members</button>
      <button onClick={handleLogout}>Logout</button>
      <h1>{profile.username}</h1>
      <p>{profile.first_name}</p>
    </div>
  );
}
