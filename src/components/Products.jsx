import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/CartSlice";
import { fetchProducts } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();

  // ✅ Access data and status from Redux store
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  // ✅ Show loading or error messages
  if (status === "loading") {
    return <h2>Loading products...</h2>;
  }

  if (status === "error") {
    return <h2>Something went wrong! Please try again later.</h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
