import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const API_URL = "http://127.0.0.1:8000/api/blog/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await axios.post(API_URL, {
        BlogTitle: title,
        BlogBody: body,
      });

      navigate("/");
    } catch (err) {
      setError("Failed to create post");
    }
  };

  return (
    <div>
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Post body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />

        <button type="submit">Create</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
