import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {
        fade: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div>
            <Slider {...settings}>
                <div className='first slider'>
                    <h3>50% off</h3>
                    <h4>All the salads</h4>
                </div>
                <div className='second slider'>
                    <h3>50% off</h3>
                    <h4>All the salads</h4>
                </div>
                <div className='third slider'>
                    <h3>50% off</h3>
                    <h4>All the salads</h4>
                </div>
                <div className='forth slider'>
                    <h3>50% off</h3>
                    <h4>All the salads</h4>
                </div>
            </Slider>

        </div>

    );
}