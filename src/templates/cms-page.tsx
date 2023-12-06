/* eslint-disable*/
// TODO: Disabled eslint due to component is not used anywhere

import {useEffect} from 'react';
// import {DraggableArea, } from 'experro-storefront';
import {ExpCustomImageRenderer} from '../components/common-components/custom-image-rendrer';
import {expDataSourceConstants} from '../cms-utils/constants';
// import Link from 'next/link';

export interface CmsPageProps {
    pageData: any;
    components: any;
}

const CmsPage = (props: CmsPageProps) => {
    const IsCMSApp = true
    const {pageData, components} = props;
    const staticWidthArr: string[] = ['1280', '768', '1136', '750'];

    useEffect(() => {
        if (
            pageData?.featured_image_emd ||
            (pageData?.seo_settings_com &&
                pageData?.seo_settings_com[0]?.show_page_title_eb)
        ) {
            document.body.classList.add('page-with-landing-banner');
        }
        return () => document.body.classList.remove('page-with-landing-banner');
    }, []);

    return (
        <div className="page-body">
            {!!(
                pageData?.featured_image_emd ||
                (pageData?.page_title_esi &&
                    pageData?.seo_settings_com &&
                    pageData?.seo_settings_com[0]?.show_page_title_eb)
            ) && (
                <div className="page-header-section">
                    <div className="category-image-overlay has-image-fill">
                        {!!pageData?.featured_image_emd && (
                            <ExpCustomImageRenderer
                                dataSource={expDataSourceConstants?.CONTENT_LIBRARY}
                                staticWidthArr={staticWidthArr}
                                contentLibraryImageData={
                                    pageData?.featured_image_emd
                                        ? pageData?.featured_image_emd[0]
                                        : ''
                                }
                                height={'500'}
                                width={'1920'}
                            />
                        )}
                    </div>

                    <div className="container">
                        <h1
                            className="page-title"
                            dangerouslySetInnerHTML={{
                                __html: pageData?.page_title_esi,
                            }}
                        />
                    </div>

                    <div className="container">
                        <h1
                            className="page-title"
                            dangerouslySetInnerHTML={{
                                __html: pageData?.page_title_esi,
                            }}
                        />
                    </div>
                </div>
            )}

            {/*<DraggableArea*/}
            {/*    style={{width: 'auto'}}*/}
            {/*    cssClass={''}*/}
            {/*    id={'cms-page-drop1'}*/}
            {/*    components={components}*/}
            {/*    modelField={''}*/}
            {/*    pageData={pageData}*/}
            {/*/>*/}

            {!!(
                pageData?.seo_settings_com &&
                pageData?.seo_settings_com[0]?.show_breadcrumb_eb &&
                pageData?.breadcrumb_com
            ) && (
                <div className="breadcrumb-section">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li>
                                {/*<Link to={'/'}>Home</Link>*/}
                            </li>

                            {!!(pageData?.breadcrumb_com?.length > 1) &&
                                pageData?.breadcrumb_com?.map((item: any, index: any) => {
                                    if (
                                        item?.page_title_et?.length &&
                                        item?.page_link_et?.length
                                    ) {
                                        if (IsCMSApp) {
                                            return (
                                                <li key={item?.id?.toString()}>
                                                    {/*<Link to={`${item?.page_link_et}`}>*/}
                                                    {/*    {item?.page_title_et}*/}
                                                    {/*</Link>*/}
                                                </li>
                                            );
                                        } else {
                                            return (
                                                <li key={item?.id?.toString()}>
                                                    <a href={`${item?.page_link_et}`}>
                                                        {item?.page_title_et}
                                                    </a>
                                                </li>
                                            );
                                        }
                                    }
                                })}
                            <li>
                                {pageData?.page_title_esi
                                    ? pageData?.page_title_esi
                                    : pageData?.name_esi}
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            <div className="page-content">
                <div className="container">
                    {pageData?.description_eti && (
                        <div
                            className="page-content-style"
                            dangerouslySetInnerHTML={{
                                __html: pageData?.description_eti,
                            }}
                        />
                    )}
                </div>

                {/*<DraggableArea*/}
                {/*    style={{width: 'auto'}}*/}
                {/*    cssClass={''}*/}
                {/*    id={'cms-page-drop2'}*/}
                {/*    components={components}*/}
                {/*    modelField={''}*/}
                {/*    pageData={pageData}*/}
                {/*/>*/}
            </div>
        </div>
    );
};

export default CmsPage;
