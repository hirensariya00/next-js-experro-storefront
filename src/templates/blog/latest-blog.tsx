import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {ContentService} from '../../services';
import ExpLinkParser from '../../cms-utils/link-parser';
import {ExpCustomImageRenderer} from '../../components/common-components/custom-image-rendrer';
import {expDataSourceConstants} from '../../cms-utils';
import {getFormattedDate} from '../../cms-utils/get-formatted-date';
import placeHolderBlogImage from '../../assets/images/blog-placeholder.png';

const ExpLatestBlog: React.FC<any> = () => {
    const [latestPost, setLatestPost] = useState<any>({});
    const [isLoading, setIsLoading] = useState(true);

    //Function to get all the posts
    const getLatestPostData = useCallback(async () => {
        try {
            const apiDataForPosts =
                await ContentService.getContentModelRecordsByFieldKeyValue({
                    modelInternalName: 'posts',
                    fieldKey: 'set_as_a_featured_ebi',
                    fieldValue: 'true',
                    fieldsToQuery: '*',
                    sortBy: 'modified_at',
                    sortType: 'desc',
                    contentDataSortBy: 'modified_at',
                    relationField: 'categories_exp_rel,author_exp_rel', // need to give the relation field name to get the data, e.g. here we want to get relation data for categories so need to pass it
                    relationFieldDataToQuery: 'page_slug,title',
                    limit: '1',
                    skip: '0',
                });
            setLatestPost(apiDataForPosts?.Data?.items[0]);
            setIsLoading(false);
        } catch (error: any) {
            setIsLoading(false);
            //TODO: add proper error message
            // eslint-disable-next-line no-console
            console.error(error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [latestPost]);

    useEffect(() => {
        getLatestPostData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            {!isLoading && (
                <div className="row gutter-large align-center latestBlog m-b-40">
                    <div className="col col-5 col-tab-6 col-mob-12 blog-list-item">
                        <div className="blog-list-image has-image-fill scale-img">
                            <ExpLinkParser to={latestPost?.page_slug} className="">
                                {latestPost?.thumbnail_image_emd ? (
                                    <ExpCustomImageRenderer
                                        contentLibraryImageData={
                                            latestPost?.thumbnail_image_emd
                                                ? latestPost?.thumbnail_image_emd[0]
                                                : ''
                                        }
                                        dataSource={expDataSourceConstants.CONTENT_LIBRARY}
                                        staticWidthArr={['528']}
                                        height={297}
                                        width={528}
                                    />
                                ) : (
                                    <img
                                        src={placeHolderBlogImage}
                                        height="297"
                                        width="528"
                                        alt="Excore-blog-latest"
                                        title="Excore-blog-latest"
                                    />
                                )}
                            </ExpLinkParser>
                        </div>
                    </div>
                    <div className="col col-7 col-tab-6 col-mob-12 blog-list-caption">
                        <div className="category-post flex m-b-5">
                            <p className="m-b-0 hide">
                                {latestPost?.categories_exp_rel &&
                                    latestPost?.categories_exp_rel?.map(
                                        (item: any, index: number) => (
                                            <Fragment key={index.toString()}>
                                                <ExpLinkParser to={item?.page_slug}>
                          <span className="uppercase font-medium">
                            {item?.title}
                          </span>
                                                </ExpLinkParser>
                                            </Fragment>
                                        )
                                    )}
                            </p>
                            <p className="m-b-0 posted position-relative">
                <span className="dark-color">
                  {getFormattedDate(latestPost?.publish_date_edsi)}
                </span>
                            </p>
                        </div>
                        <h5 className="m-b-16 font-semi-bold">
                            <ExpLinkParser to={latestPost?.page_slug} className="">
                                {latestPost?.page_title_esi}
                            </ExpLinkParser>
                        </h5>

                        {latestPost?.summary_et && (
                            <p
                                className="m-b-16 description"
                                dangerouslySetInnerHTML={{__html: latestPost?.summary_et}}
                            />
                        )}
                        <div className="blog-list-author">
                            <p className="m-b-0 author position-relative">
                                {latestPost?.author_exp_rel && (
                                    <span className="dark-color">
                    {latestPost?.author_exp_rel[0]?.title}
                  </span>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ExpLatestBlog;
