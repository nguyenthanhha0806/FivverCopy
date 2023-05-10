import React from 'react'
import Slider from 'infinite-react-carousel';

import './Slide.scss'


const Slide = ({ children, slidesToShow, arrowsScroll }) => {
    return (
        <div className='slide'>
            <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
                {children}
            </Slider>
        </div>
    )
}
export default Slide
