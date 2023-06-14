import React from 'react';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

// @ts-ignore
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <FaChevronRight color={'#4366c5'}  size={40} />
  </button>
);

export default SlickArrowRight;