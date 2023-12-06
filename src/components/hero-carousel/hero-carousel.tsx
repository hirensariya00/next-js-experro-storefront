'use client'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import ExpHeroCarouselController from './hero-carousel-contoller'

const ExpHeroCarousel = () => {
    const settings: any = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        prevArrow: (
            <button
                type="button"
                className="slick-arrow slick-prev"
                aria-label="Left Arrow">
                {/*<HeroIconArrowLeft/>*/}
                Left Arrow
            </button>
        ),
        nextArrow: (
            <button
                type="button"
                className="slick-arrow slick-next"
                aria-label="Right Arrow">
                {/*<HeroIconArrowRight/>*/}
                Right Arrow
            </button>
        ),
    };

    const {sliderKey} = ExpHeroCarouselController()


    return (<Slider {...settings} key={sliderKey}>
            <div><img src={'https://excore-bigcommerce-demo.experro.com/mm-images/decor-img-j4kosuqy.jpeg'}/>
                <button onClick={() => {
                    console.log('test 1',)
                }}> Click
                </button>
            </div>
            <div><img src={'https://excore-bigcommerce-demo.experro.com/mm-images/home-decor-v4agcybk.png'}/>
                <button onClick={() => {
                    console.log('test 2',)
                }}> Click
                </button>
            </div>
            <div><img src={'https://excore-bigcommerce-demo.experro.com/mm-images/banner-2-1-1--ue45vyjy.png'}/>
                <button onClick={() => {
                    console.log('test 3',)
                }}> Click
                </button>
            </div>
        </Slider>
    );
}
export default ExpHeroCarousel;
