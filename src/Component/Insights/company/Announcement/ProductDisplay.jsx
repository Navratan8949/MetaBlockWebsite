import React, { useContext } from "react";
import star_icon from "./Assets/star_icon.png";
// import { ShopContext } from "./ShopContext";
import './ProductDisplay.css'

const ProductDisplay = (props) => {
  const { product } = props;

  if (!product) {
    return null;
  }

  if (!product.image) {
    return (
      <div>
        <p>Error: Product image not available</p>
      </div>
    );
  }

  return (
    <div className="Product-container">

      <div className="product-image">
        {/* Displaying a single image */}
        <img src={product.image} alt="" />
      </div>
      <div className="Details-container">
        <h4>{product.name}</h4>
        <div>
          <p>{product.Paragraph}</p>
        </div>
        {/* <button onClick={()=>{addToCart(product.id)}}>Add to cart</button> */}
      </div>
    </div>
  );
};

export default ProductDisplay;