import { useState } from "react";

import { Link } from "react-router-dom";
function NewProductPage() {
  const [product, setProduct] = useState({
    id: JSON.parse(localStorage.getItem("products")).length + 1,
    title: "",
    price: 0,
    description: "",
  });

  const ChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };
  const SubmitHandler = (e) => {
    if (product.title !== "" && product.price !== "") {
      e.preventDefault();
      const products = JSON.parse(localStorage.getItem("products")) || [];
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));
      setProduct(() => ({
        id: product.id + 1,
        title: "",
        price: 0,
        description: "",
      }));
    } else {
      alert("Name and price must not be empty");
    }
  };

  return (
    <div>
      <p>New product</p>
      <form onSubmit={SubmitHandler}>
        <div className="newProductInfo">
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
          <button>Create</button>
          <Link to="/">Go back</Link>
        </div>
      </form>
    </div>
  );
}
export default NewProductPage;
