import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `http://127.0.0.1:8000/api/blog/${id}/`;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(API_URL);
        setTitle(response.data.BlogTitle);
        setBody(response.data.BlogBody);
      } catch (err) {
        setError("Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [API_URL]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.append("BlogTitle", title);
    formData.append("BlogBody", body);

    try {
      await axios.put(API_URL, formData);
      navigate("/");
    } catch (err) {
      setError("Failed to update post");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />

        <button type="submit">Save</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
