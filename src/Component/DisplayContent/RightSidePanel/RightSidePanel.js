import React, { useState, useEffect } from "react";
import "./RightSidePanel.css";
import Product from "./Product";
import { Link, useParams } from "react-router-dom";

function RightSidePanel(props) {
  const [listOfProduct, setListOfProducts] = useState([]);

  useEffect(() => {
    let list = [
      {
        id: 123456543,
        name: "Iphone10",
        rating: "4.25",
        price: "599.99",
        image:
          "https://ik.imagekit.io/amazonvh323/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677103526994",
      },
      {
        id: 54342265,
        name: "Iphone11",
        rating: "4.25",
        price: "699.99",
        image:
          "https://ik.imagekit.io/amazonvh323/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677103527135",
      },
      {
        id: 123453456543,
        name: "Iphone12",
        rating: "4.25",
        price: "799.99",
        image:
          "https://ik.imagekit.io/amazonvh323/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677103526118",
      },
      {
        id: 12344545456543,
        name: "Iphone13",
        rating: "4.25",
        price: "899.99",
        image:
          "https://ik.imagekit.io/amazonvh323/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677103526024",
      },
    ];
    setListOfProducts(list);
  }, []);

  return (
    <div className="rightSide_main">
      {listOfProduct.map((item, index) => (
        <Link to={`/order/` + item.id} key={index}>
          <Product definition={item} />
        </Link>
      ))}
    </div>
  );
}

export default RightSidePanel;
