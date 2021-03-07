import React from "react";
import Values from "../../Layout/values";
import ClothImage from "../../../assets/images/wash-cloth.png";
import GuaranteeImage from "../../../assets/images/guarantee.png";
import PickupImage from "../../../assets/images/pickup.png";
import AffordableImage from "../../../assets/images/affordable.png";
import Wash from "../../Layout/wash";
import { Row } from "reactstrap";
import WashService from "../../Layout/washService";

function WashContent() {
  return (
    <div className="about-content">
      <Values
        about="We think ahead"
        heading="Services you love"
        imgSrc={ClothImage}
        mirror
      />
      <Wash />
      <Row className='justify-space-around mt-5 px-5 pt-5'>
        <WashService heading="Guaranteed Services" imgSrc={GuaranteeImage} />
        <WashService heading="Affordable Price" imgSrc={AffordableImage} />
        <WashService heading="Pick Up & Delivery Free" imgSrc={PickupImage} />
      </Row>
    </div>
  );
}

export default WashContent;
