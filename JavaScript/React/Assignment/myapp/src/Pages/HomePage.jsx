import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      Homepage
      <Link to="/Login">Go to login</Link>
    </div>
  );
}

export default HomePage;
