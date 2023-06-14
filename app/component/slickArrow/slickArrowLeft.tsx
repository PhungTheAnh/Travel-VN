import React from 'react';
import {FaChevronLeft} from "react-icons/fa";

// @ts-ignore
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" +
      (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <FaChevronLeft color={'#4366c5'}  size={40} />
  </button>
);

export default SlickArrowLeft;