import React, { useState } from "react";
import "./RightSidePanel.css";
import Rating from "@mui/material/Rating";
import getSymbolFromCurrency from "currency-symbol-map";

function Product(props) {
  return (
    <div className="product">
      <div className="product_image">
        <img src={props.definition.image} height="300px" alt="" />
      </div>
      <div className="product_name">{props.definition.name}</div>
      <div className="product_rating">
        <Rating
          name="read-only"
          value={4}
          style={{ fontSize: "20px" }}
          readOnly
        />
        {props.definition.rating}
      </div>
      <div className="product_price">
        {getSymbolFromCurrency("USD")}
        {props.definition.price}
      </div>
    </div>
  );
}

export default Product;
