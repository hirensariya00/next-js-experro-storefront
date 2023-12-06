/* eslint-disable jsx-a11y/img-redundant-alt */
'use client'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {ContentService} from '../../../services';
import ExpLinkParser from '../../../cms-utils/link-parser';
import ExpHeroCarouselController from './hero-carousel-contoller';
import ExpLoadingPlaceholder from '../../common-components/loading-placeholder/loading-placeholder';
import {ExpImageParser} from '../../../cms-utils/image-parser';
import {linkParserStyle} from '../../../cms-utils/link-parser-style';
import {ExpCustomImageRenderer} from '../../common-components/custom-image-rendrer';
import {HeroIconArrowRight} from '../../../assets/icons/arrow-right-2 ';
import {HeroIconArrowLeft} from '../../../assets/icons/arrow-left-2';
import {
    expDataSourceConstants,
    expWidgetConstants,
} from '../../../cms-utils/constants';
import Slider from 'react-slick';

export interface ExpHeroCarouselProps {
    component_content?: any;
    autoPlayTime?: any;
    isShowPagination?: string;
    paginationPosition?: string;
    isShowSubTitle?: string;
    isShowTitle?: string;
    titleTextPosition?: string;
    titleSize?: string;
    titleTextColor?: any;
    subTitleSize?: string;
    subTitleTextColor?: any;
    buttonColor?: string;
    buttonTextColor?: string;
    buttonHoverColor?: string;
    buttonTextHoverColor?: string;
    showSliderArrows?: string | boolean;
    isAutoPlay?: string | boolean;
    id?: string;
}

/**
 * Renders a Hero Carousel component.
 * @param {ExpHeroCarouselProps} props - The Hero Carousel component props.
 * @returns The rendered Hero Carousel component.
 */

const ExpHeroCarousel = (props: ExpHeroCarouselProps) => {
    const {
        autoPlayTime,
        isShowPagination,
        paginationPosition,
        component_content,
        isShowSubTitle,
        isShowTitle,
        titleTextPosition,
        titleSize,
        titleTextColor,
        subTitleSize,
        subTitleTextColor,
        buttonColor,
        buttonTextColor,
        buttonHoverColor,
        buttonTextHoverColor,
        id,
        isAutoPlay,
        showSliderArrows,
    } = props;

    const {
        contentModel,
        componentDataDispatcher,
        isRenderingOnServer,
        sliderKey,
    } = ExpHeroCarouselController({
        isAutoPlay,
        component_content,
        isShowSubTitle,
        isShowTitle,
        titleTextPosition,
        titleSize,
        subTitleSize,
        id,
    });

    const {WIDGET_CHECK_TRUE} = expWidgetConstants;
    const {componentData} = componentDataDispatcher;

    const staticWidthArr: string[] = ['1920', '1024'];

    const settings: any = {
        dots: true,
        infinite: true,
        className: `${paginationPosition} ${
            isShowPagination === WIDGET_CHECK_TRUE ? 'pagination-show' : ''
        }`,
        speed: 500,
        arrows: showSliderArrows === WIDGET_CHECK_TRUE,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: isAutoPlay === WIDGET_CHECK_TRUE,
        autoplaySpeed: parseInt(autoPlayTime) || 1000,
        pauseOnHover: true,
        prevArrow: (
            <button
                type="button"
                className="slick-arrow slick-prev"
                aria-label="Left Arrow">
                <HeroIconArrowLeft/>
            </button>
        ),
        nextArrow: (
            <button
                type="button"
                className="slick-arrow slick-next"
                aria-label="Right Arrow">
                <HeroIconArrowRight/>
            </button>
        ),
    };

    const heroCarouselFirstImage = () => {
        const imageData =
            componentData.hero_carousel_com && componentData.hero_carousel_com[0]
                ? ExpImageParser(
                    componentData.hero_carousel_com[0]?.slide_image_emd &&
                    componentData.hero_carousel_com[0]?.slide_image_emd[0]
                )
                : null;

        if (imageData?.imageUrl) {
            return imageData?.imageUrl;
        } else {
            return null;
        }
    };

    return (
        <>
            <ExpLoadingPlaceholder
                loaderClassName="hero-carousel-section"
                contentModel={contentModel}
                isLoading={componentDataDispatcher?.isLoading}
                componentData={componentData}
            />

            {componentData?.id && !componentDataDispatcher?.isLoading && (
                <>
                    <style>
                        {`#${id} .hero-carousel-section .hover_button_style.button_style:hover {
                background-color: var(--button-hover-bg-color) !important;

                color: var(--button-hover-color) !important;
              }
               #${id} .hero-carousel-section .hover_button_style.button_style {
                background-color: var(--button-bg-color) !important;

                color: var(--button-color) !important;
              }`}
                    </style>

                    <div
                        className="hero-carousel-section section-gap"
                        suppressHydrationWarning={true}>
                        {isRenderingOnServer && (
                            <div
                                key={0}
                                className={`heroSlide ${titleTextPosition}`}
                                suppressHydrationWarning={true}>
                                <div className="heroSlideImage" suppressHydrationWarning={true}>
                                    {heroCarouselFirstImage() && (
                                        <picture>
                                            <source
                                                media={'(min-width:1280px)'}
                                                srcSet={`${heroCarouselFirstImage()}?width=1920`}
                                            />
                                            <source
                                                media={'(min-width:768px)'}
                                                srcSet={`${heroCarouselFirstImage()}?width=768`}
                                            />
                                            <source
                                                media={'(min-width:320)'}
                                                srcSet={`${heroCarouselFirstImage()}?width=500`}
                                            />
                                            <img
                                                src={`${heroCarouselFirstImage()}`}
                                                height="600"
                                                width="1920"
                                                alt="image"
                                            />
                                        </picture>
                                    )}
                                </div>

                                <div
                                    className="heroSlideContent"
                                    style={{opacity: 1}}
                                    suppressHydrationWarning={true}>
                                    <div
                                        className={`heroSlideContentInner ${titleTextPosition}`}
                                        suppressHydrationWarning={true}>
                                        <p
                                            className="uppercase"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                componentData?.hero_carousel_com[0]
                                                    ?.slide_tag_line_et,
                                            }}
                                        />
                                        {isShowTitle === WIDGET_CHECK_TRUE &&
                                            componentData?.hero_carousel_com[0]?.slide_heading_et && (
                                                <h2
                                                    className={`${titleSize}`}
                                                    style={{
                                                        color:
                                                            typeof titleTextColor === 'string'
                                                                ? JSON.parse(titleTextColor).value
                                                                : titleTextColor?.value,
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: ContentService.parseVariableValue(
                                                            componentData?.hero_carousel_com[0]
                                                                ?.slide_heading_et
                                                        ),
                                                    }}
                                                />
                                            )}

                                        {isShowSubTitle === WIDGET_CHECK_TRUE &&
                                            componentData?.hero_carousel_com[0]
                                                ?.slide_sub_heading_et && (
                                                <p
                                                    className="sub-title"
                                                    style={{
                                                        color:
                                                            typeof subTitleTextColor === 'string'
                                                                ? JSON.parse(subTitleTextColor).value
                                                                : subTitleTextColor?.value,
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: ContentService.parseVariableValue(
                                                            componentData?.hero_carousel_com[0]
                                                                ?.slide_sub_heading_et
                                                        ),
                                                    }}
                                                />
                                            )}

                                        {componentData?.hero_carousel_com[0]
                                            ?.slide_button_text_1_et && (
                                            <ExpLinkParser
                                                style={linkParserStyle({
                                                    buttonHoverColor,
                                                    buttonTextHoverColor,
                                                    buttonColor,
                                                    buttonTextColor,
                                                })}
                                                className="button button-secondary hover_button_style button_style"
                                                to={
                                                    componentData?.hero_carousel_com[0]
                                                        ?.slide_button_link_1_et
                                                }
                                                dangerouslySetInnerHTML={{
                                                    __html: ContentService.parseVariableValue(
                                                        componentData?.hero_carousel_com[0]
                                                            ?.slide_button_text_1_et
                                                    ),
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {!isRenderingOnServer && (
                            <Slider {...settings} key={sliderKey}>
                                {componentData?.hero_carousel_com?.map(
                                    (data: any, index: number) => {
                                        return (
                                            // Add class contentRight with heroSlide for right side content
                                            <div
                                                key={index.toString()}
                                                className={`heroSlide ${titleTextPosition}`}
                                                suppressHydrationWarning={true}>
                                                <div
                                                    className="heroSlideImage"
                                                    suppressHydrationWarning={true}>
                                                    {/*<>{console.log('test', JSON.parse(data?.slide_image_emd))}</>*/}
                                                    <ExpCustomImageRenderer
                                                        dataSource={expDataSourceConstants?.CONTENT_LIBRARY}
                                                        contentLibraryImageData={
                                                            data?.slide_image_emd
                                                                ? data?.slide_image_emd[0]
                                                                : ''
                                                        }
                                                        height="600"
                                                        width="1920"
                                                        staticWidthArr={staticWidthArr}
                                                    />
                                                </div>
                                                <div
                                                    className="heroSlideContent"
                                                    suppressHydrationWarning={true}>
                                                    <div
                                                        className={`heroSlideContentInner ${titleTextPosition}`}
                                                        suppressHydrationWarning={true}>
                                                        <p
                                                            className="uppercase"
                                                            dangerouslySetInnerHTML={{
                                                                __html: data?.slide_tag_line_et,
                                                            }}
                                                        />
                                                        {isShowTitle === WIDGET_CHECK_TRUE &&
                                                            data?.slide_heading_et && (
                                                                <h2
                                                                    className={`${titleSize}`}
                                                                    style={{
                                                                        color:
                                                                            typeof titleTextColor === 'string'
                                                                                ? JSON.parse(titleTextColor).value
                                                                                : titleTextColor?.value,
                                                                    }}
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: ContentService.parseVariableValue(
                                                                            data?.slide_heading_et
                                                                        ),
                                                                    }}
                                                                />
                                                            )}

                                                        {isShowSubTitle === WIDGET_CHECK_TRUE &&
                                                            data?.slide_sub_heading_et && (
                                                                <p
                                                                    className={'sub-title'}
                                                                    style={{
                                                                        color:
                                                                            typeof subTitleTextColor === 'string'
                                                                                ? JSON.parse(subTitleTextColor).value
                                                                                : subTitleTextColor?.value,
                                                                    }}
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: ContentService.parseVariableValue(
                                                                            data?.slide_sub_heading_et
                                                                        ),
                                                                    }}
                                                                />
                                                            )}

                                                        {data?.slide_button_text_1_et && (
                                                            <ExpLinkParser
                                                                style={linkParserStyle({
                                                                    buttonHoverColor,
                                                                    buttonTextHoverColor,
                                                                    buttonColor,
                                                                    buttonTextColor,
                                                                })}
                                                                className="button button-secondary hover_button_style button_style"
                                                                to={data?.slide_button_link_1_et}
                                                                dangerouslySetInnerHTML={{
                                                                    __html: ContentService.parseVariableValue(
                                                                        data?.slide_button_text_1_et
                                                                    ),
                                                                }}
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                )}
                            </Slider>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default ExpHeroCarousel;
