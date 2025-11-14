import { Link, useParams } from "react-router-dom";

export default function ProductInfoPage() {
  const params = useParams();
  const product = JSON.parse(localStorage.getItem("products")).find(
    (p) => p.id === parseInt(params.id)
  );

  return (
    <div>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>{product.title}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{product.title}</td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>{product.price}</td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>{product.description}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/">Back</Link> | <Link to={`/edit/${params.id}`}>Edit</Link>
    </div>
  );
}
