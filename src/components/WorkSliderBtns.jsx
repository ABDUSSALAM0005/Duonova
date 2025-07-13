"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles}) => {

    const swiper = useSwiper();

  return (
    <div className={containerStyles}>
        <button className={`flex items-center justify-center ${btnStyles}`} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles}/>
        </button>
        <button className={`flex items-center justify-center ${btnStyles}`} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles}/>
        </button>
    </div>
  )
}

export default WorkSliderBtns