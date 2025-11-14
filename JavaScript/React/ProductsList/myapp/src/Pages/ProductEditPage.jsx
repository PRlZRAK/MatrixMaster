import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router";

function ProductEditPage() {
  const params = useParams();
  const navigate = useNavigate();
  const localproduct = JSON.parse(localStorage.getItem("products")).find(
    (p) => p.id === parseInt(params.id)
  );
  const [product, setProduct] = useState({
    id: localproduct.id,
    title: localproduct.title,
    price: localproduct.price,
    description: localproduct.description,
  });

  const ChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };
  const SubmitHandler = (e) => {
    e.preventDefault();

    if (product.title !== "" && product.price !== "") {
      const products = JSON.parse(localStorage.getItem("products"));
      console.log(products);
      products[products.findIndex((p) => p.id === parseInt(params.id))] =
        product;
      localStorage.setItem("products", JSON.stringify(products));
      navigate("/");
    } else {
      alert("Name and price must not be empty");
    }
  };

  return (
    <div>
      <p>Edit product</p>
      <form onSubmit={SubmitHandler}>
        <div className="ProductInfo">
          <label>Name</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={ChangeHandler}
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={ChangeHandler}
          />
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={ChangeHandler}
          />
        </div>
        <div className="rightButtons">
          <button>Update</button>
          <div>
            <Link to="/">Home</Link> |{" "}
            <Link to={`/show/${params.id}`}>Show</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ProductEditPage;
