//@ts-nocheck
import { Fragment } from 'react';
import ExpBlogCardController from './blog-card-controller';
import ExpBlogItem from '../../../templates/blog/blog-item';
import Slider from 'react-slick';
import { expWidgetConstants } from '../../../cms-utils';
import { IconArrowLeft } from '../../../assets/icons/left-prod';
import { IconArrowRight } from '../../../assets/icons/right-prod';
const ExpBlogCard = ({ component_content, is_slider_enable, slider_arrows_visibility, autoplay_speed, is_autoplay }: any) => {
  const { postData, isLoading, title } = ExpBlogCardController({ component_content });
  const { WIDGET_CHECK_TRUE } = expWidgetConstants
  const settings = {
    dots: true,
    infinite: true,
    className: 'slick-top-arrow',
    speed: 500,
    arrows: slider_arrows_visibility === WIDGET_CHECK_TRUE,
    draggable: true,
    slidesToShow:
      postData?.length < 3
        ? postData?.length
        : 3,
    slidesToScroll: 1,
    autoplay: is_autoplay === WIDGET_CHECK_TRUE,
    autoplaySpeed: typeof autoplay_speed !== 'number' ? Number(autoplay_speed) : autoplay_speed,
    adaptiveHeight: false,
    prevArrow: (
      <button
        type="button"
        className="slick-arrow slick-prev"
        aria-label="Left Arrow">
        <IconArrowLeft />
      </button>
    ),
    nextArrow: (
      <button
        type="button"
        className="slick-arrow slick-next"
        aria-label="Right Arrow">
        <IconArrowRight />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow:
            postData?.length < 3
              ? postData?.length
              : 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow:
            postData?.length < 3
              ? postData?.length
              : 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow:
            postData?.length < 2
              ? postData?.length
              : 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow:
            postData?.length < 2
              ? postData?.length
              : 2,
          slidesToScroll: 1,
          draggable: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:
            postData?.length < 2
              ? postData?.length
              : 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 307,
        settings: {
          slidesToShow:
            postData?.length < 2
              ? postData?.length
              : 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return <>
    {/* Initialize Component data */}
    {(!isLoading && !postData?.length) && (<h4>Please select and save record</h4>)}
    {/* Fetching Data */}
    {(isLoading && !postData?.length) && (<></>)}
    {/* Data Fetched */}
    {(!isLoading && postData?.length) ? (
      <>
        <div className="page-content blog-card">
          <div className="section-title m-b-56 text-center">
            <div className="container">
              <h4 suppressHydrationWarning>
                {title}
              </h4>
            </div>
          </div>
          <div className="container">
            <div className={`${is_slider_enable === WIDGET_CHECK_TRUE ? '' : 'row'} gutter-large `}>
              {is_slider_enable === WIDGET_CHECK_TRUE ? (
                <Slider {...settings}>
                  {postData?.map((item: any) => (
                    <Fragment key={item.id}>
                      <ExpBlogItem blogItemData={item} />
                    </Fragment>
                  ))}
                </Slider>
              ) : (
                <>
                  {postData?.map((item: any) => (
                    <Fragment key={item.id}>
                      <ExpBlogItem blogItemData={item} />
                    </Fragment>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </>
    ) : (
      <></>
    )
    }
  </>;
};

export default ExpBlogCard;
