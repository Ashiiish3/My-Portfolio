import React from 'react'
import { useSwiper } from 'swiper/react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function WorkSliderBtns({containerStyles, btnStyles, iconStyles}) {
    const swiper = useSwiper()
    return (
      <div className={containerStyles}>
          <button className={btnStyles} onClick={()=>swiper.slidePrev()}>
              <IoIosArrowBack className={iconStyles} />
          </button>
          <button className={btnStyles} onClick={()=>swiper.slideNext()}>
              <IoIosArrowForward className={iconStyles} />
          </button>
      </div>
    )
}