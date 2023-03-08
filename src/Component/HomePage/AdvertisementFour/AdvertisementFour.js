import React from "react";
import "./AdvertisementFour.css";
import { Link } from "react-router-dom";

function AdvertisementFour(props) {
  return (
    <div className="AdvertisementOne_main">
      <div className="AdvertisementOne_header">
        Up to 70% off | Electronics clearance store
      </div>
      <div className="AdvertisementOne_body">
        <img
          src="https://ik.imagekit.io/amazonvh323/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677103526994"
          className="ad_fourImage"
        />
        <img
          src="https://ik.imagekit.io/amazonvh323/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677103527135"
          className="ad_fourImage"
        />
        <img
          src="https://ik.imagekit.io/amazonvh323/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677103526118"
          className="ad_fourImage"
        />
        <img
          src="https://ik.imagekit.io/amazonvh323/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677103526024"
          className="ad_fourImage"
        />
      </div>
      <Link to={"/display"}>
        <div className="AdvertisementFour_footer">See more</div>
      </Link>
    </div>
  );
}

export default AdvertisementFour;
