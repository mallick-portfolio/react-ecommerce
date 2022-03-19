import React from "react";
import "./ProductCards.css";
const ProductCard = ({ product }) => {
  return (
    <div className="col">
      <div className="card h-100 product">
        <img
          src={product.image}
          className="card-img-top w-50 mx-auto"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <h5 className="card-title bg-info d-inline px-2 py-1 text-white my-3 rounded-3">
            {product.price}
          </h5>
          <p className="card-text">{product.description.slice(0, 60)}</p>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">Show Details</button>
            <button className="btn btn-info mx-1">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
