import React from "react";
import "./AdvertisementOne.css";

function AdvertisementOne(props) {
  return (
    <div className="AdvertisementOne_main">
      <div className="AdvertisementOne_header">
        Up to 70% off | Electronics clearance store
      </div>
      <div className="AdvertisementOne_body">
        <img
          src="https://ik.imagekit.io/amazonvh323/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677103525318"
          width="300px"
        />
      </div>
      <div className="AdvertisementOne_footer">See more</div>
    </div>
  );
}

export default AdvertisementOne;
