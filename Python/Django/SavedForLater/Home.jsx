import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/blog/");
      setData(response.data);
    } catch (err) {
      setError(err.response.data || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Link to="/create">Create Post</Link>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            <h1>{item.BlogTitle}</h1>
            <p>{item.BlogBody}</p>
            <Link to={`/edit/${item.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
