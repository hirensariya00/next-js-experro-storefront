import {Fragment, useCallback, useEffect, useState} from 'react';
import {ContentService,} from '../../services';
// import Link from 'next/link';
import {IconFacebook} from '../../assets/icons/facebook';
import {IconTwitter} from '../../assets/icons/twitter';
import {ExpCustomImageRenderer} from '../../components/common-components/custom-image-rendrer';
import {getFormattedDate} from '../../cms-utils/get-formatted-date';
import {expDataSourceConstants} from '../../cms-utils/constants';
import placeHolderBlogImage from '../../assets/images/blog-placeholder.png'

export interface BlogDetailProps {
    pageData: any;
    components: any;
}

const BlogDetail = (props: BlogDetailProps) => {
    const {pageData, components} = props;

    const [categoryList, setCategoryList] = useState<any>([]);
    const [authorName, setAuthorName] = useState<any>();

    //get Filter Object
    const getFilterString = (filterFor: string) => {
        let filter = '';
        if (pageData?.categories_exp_rel && filterFor === 'c') {
            filter += `content_model_data_id:(${pageData?.categories_exp_rel.join(
                ','
            )})`;
        }
        if (pageData?.author_exp_rel && filterFor === 'a') {
            filter += `content_model_data_id:(${pageData?.author_exp_rel.join(',')})`;
        }
        return filter;
    };

    // Get Author Name
    const getAuthorName = useCallback(async () => {
        if (pageData?.author_exp_rel) {
            try {
                const apiAuthorName =
                    await ContentService.getContentModelRecordsByFieldKeyValue({
                        fieldKey: 'id',
                        fieldValue: '*',
                        modelInternalName: 'author',
                        fieldsToQuery: 'page_title_esi,page_slug',
                        sortBy: 'created_at',
                        sortType: 'asc',
                        filter: getFilterString('a'),
                    });
                setAuthorName(apiAuthorName?.Data?.items);
            } catch (error: any) {
                //TODO: add proper error message
                // eslint-disable-next-line no-console
                console.error(error);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Set the Categories Data
    const getContentLibraryData = useCallback(async () => {
        try {
            let apiCategoriesListingData =
                await ContentService.getContentModelRecordsByFieldKeyValue({
                    fieldKey: 'id',
                    fieldValue: '*',
                    modelInternalName: 'categories',
                    fieldsToQuery: 'page_title_esi,page_slug',
                    sortBy: 'created_at',
                    sortType: 'asc',
                    filter: getFilterString('c'),
                });

            apiCategoriesListingData = apiCategoriesListingData?.Data?.items?.sort(
                (item1: any, item2: any) =>
                    item1.created_at > item2.created_at
                        ? 1
                        : item1.created_at < item2.created_at
                            ? -1
                            : 0
            );
            setCategoryList(apiCategoriesListingData);
        } catch (error: any) {
            //TODO: add proper error message
            // eslint-disable-next-line no-console
            console.error(error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getContentLibraryData();
        getAuthorName();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div>
                <div className="page-body blog-post-page-template">
                    <div className="breadcrumb-section">
                        <div className="container">
                            <ul className="breadcrumb">
                                <li>
                                    {/*<Link to={'/'}>Home</Link>*/}
                                </li>
                                <li>
                                    {/*<Link to={'/blog/'}>Blog</Link>*/}
                                </li>
                                <li>{pageData?.page_title_esi}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="page-content">
                        <div className="container">
                            <div className="blog-list-item m-b-64">
                                <div className="blog-list-caption text-center m-b-40">
                                    <div className="blog-list-caption-inner">
                                        <div className="category-post text-center m-b-5">
                                            {categoryList && (
                                                <p className="m-b-0 font-s-16">
                                                    <strong className="m-r-5 hide">
                                                        {categoryList?.length > 1
                                                            ? 'Categories'
                                                            : 'Category'}
                                                        :
                                                    </strong>
                                                    {categoryList?.map((item: any, index: number) => (
                                                        <Fragment key={index?.toString()}>
                              <span className="uppercase font-medium primary-color">
                                {item?.page_title_esi}
                              </span>
                                                        </Fragment>
                                                    ))}
                                                </p>
                                            )}
                                        </div>
                                        <h4 className="m-b-16 font-medium">
                                            {pageData?.page_title_esi}
                                        </h4>
                                        <div className="blog-list-author flex justify-center">
                                            {authorName && (
                                                <p className="m-b-0 author font-s-16">
                                                    {authorName?.map((item: any, index: number) => (
                                                        <Fragment key={index?.toString()}>
                              <span className="dark-color">
                                {item?.page_title_esi}
                              </span>
                                                        </Fragment>
                                                    ))}
                                                </p>
                                            )}
                                            <p className="m-b-0 posted font-s-16 position-relative">
                        <span className="dark-color">
                          {getFormattedDate(pageData?.publish_date_edsi)}
                        </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-list-image has-image-fill scale-img">
                                    {
                                        pageData?.thumbnail_image_emd ? <ExpCustomImageRenderer
                                                contentLibraryImageData={
                                                    pageData?.thumbnail_image_emd
                                                        ? pageData?.thumbnail_image_emd[0]
                                                        : ''
                                                }
                                                dataSource={expDataSourceConstants.CONTENT_LIBRARY}
                                                staticWidthArr={['1724']}
                                                height={626}
                                                width={862}
                                            /> :
                                            <img src={placeHolderBlogImage} height='297' width='528'
                                                 alt='Excore-blog-latest' title='Excore-blog-latest'/>
                                    }

                                </div>
                            </div>

                            <div className="blog-post-container flex justify-center">
                                <div className="col col-8 col-tab-12">
                                    <div
                                        className="blog-post-content"
                                        dangerouslySetInnerHTML={{__html: pageData?.post_body_et}}
                                    />

                                    <div className="blog-post-bottom-section border-top m-t-40">
                                        <ul className="social-icon-list m-b-0">
                                            <li>
                                                <a
                                                    href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                                        window.location.href
                                                    )}`}
                                                    rel="noreferrer"
                                                    target={'_blank'}>
                                                    <i className="icon">
                                                        <IconFacebook/>
                                                    </i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href={`https://twitter.com/intent/tweet/?text=${encodeURIComponent(
                                                        pageData?.page_title_esi
                                                    )}&url=${encodeURIComponent(window.location.href)}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    title="Twitter">
                                                    <i className="icon">
                                                        <IconTwitter/>
                                                    </i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<DraggableArea*/}
                        {/*  style={{ width: 'auto' }}*/}
                        {/*  cssClass={''}*/}
                        {/*  id={'blog-detail-drop1'}*/}
                        {/*  components={components}*/}
                        {/*  modelField={''}*/}
                        {/*  pageData={pageData}*/}
                        {/*/>*/}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetail;
