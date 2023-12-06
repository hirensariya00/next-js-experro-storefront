'use client'

import Header from './header';
import Footer from './footer';
import CommonComponents from './common-components';
import {ExpAccordionBlock} from './cms-library/accordion-block';
import {ExpHeroCarousel} from './cms-library/hero-carousel';
import {ExpHtmlRenderer} from './cms-library/html-renderer';
import {ExpImage} from './cms-library/image';
import {ExpLink} from './cms-library/link';
import {ExpBrandLogoGrid} from './cms-library/logo-grid-component';
import {ExpText} from './cms-library/text';
import {ExpTitleSection} from './cms-library/title-section';
import {ExpUSPBanner} from './cms-library/usp-banner';
import {ExpZigZagBanner} from './cms-library/zig-zag-banner';
import {ExpCTABanner1, ExpCTABanner2} from './cms-library/cta-banner';
import {
    ExpFiveColGridBanner,
    ExpTwoColGridBanner,
} from './cms-library/grid-banner';
import {
    ExpProductCategoryBannerV1,
    ExpProductCategoryBannerV2,
} from './cms-library/product-category-banner';
import {ExpBlogCard} from './cms-library/blog-card';

const components = {
    Footer,
    Header,
    ExpHeroCarousel,
    ExpText,
    ExpCTABanner1,
    ExpCTABanner2,
    ExpTitleSection,
    ExpImage,
    ExpLink,
    ExpFiveColGridBanner,
    ExpTwoColGridBanner,
    ExpAccordionBlock,
    ExpHtmlRenderer,
    ExpUSPBanner,
    ExpProductCategoryBannerV1,
    ExpProductCategoryBannerV2,
    ExpBrandLogoGrid,
    ExpZigZagBanner,
    ExpBlogCard,
    ...CommonComponents,
};
export default components;
