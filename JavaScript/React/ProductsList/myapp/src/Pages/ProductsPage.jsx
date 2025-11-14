import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!(localStorage.getItem("getrequestneeded") === "false")) {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("products", JSON.stringify(response.data));
          localStorage.setItem("getrequestneeded", "false");
          setProducts(response.data);
        })
        .catch((err) => {});
    } else setProducts(JSON.parse(localStorage.getItem("products")) || []);
  }, []);

  const DeleteHandler = (id) => {
    let localproduct = JSON.parse(localStorage.getItem("products")) || [];
    localproduct = localproduct.filter((p) => p.id !== id);
    localproduct = localproduct.map((p, index) => ({ ...p, id: index + 1 }));
    localStorage.setItem("products", JSON.stringify(localproduct));

    setProducts(localproduct);
  };

  //
  //
  //
  //
  //

  return (
    <div>
      <p>Products</p>
      <table className="table table-striped-columns table-bordered border-secondary">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>
                <Link to={`/show/${item.id}`}>Show</Link>{" "}
                <Link to={`/edit/${item.id}`}>Edit</Link>{" "}
                <button
                  onClick={() => DeleteHandler(item.id)}
                  className="btn btn-outline-secondary"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/new">Add product</Link>
    </div>
  );
}

export default ProductsPage;
