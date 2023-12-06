import { Fragment } from 'react';

import ExpLinkParser from '../../cms-utils/link-parser';
import { ExpCustomImageRenderer } from '../../components/common-components/custom-image-rendrer';
import { getFormattedDate } from '../../cms-utils/get-formatted-date';
import { expDataSourceConstants } from '../../cms-utils/constants';
import placeHolderBlogImage from '../../assets/images/blog-placeholder.png';

export interface ExpBlogItemProps {
  blogItemData: any;
}

const ExpBlogItem = (props: ExpBlogItemProps) => {
  const { blogItemData } = props;

  return (
    <>
      <div className="col col-4 col-tab-6 col-mob-12 blog-list-item m-b-48">
        <div className="blog-list-image has-image-fill scale-img">
          <ExpLinkParser to={`${blogItemData?.page_slug}`}>
            {blogItemData?.thumbnail_image_emd ? (
              <ExpCustomImageRenderer
                contentLibraryImageData={
                  blogItemData?.thumbnail_image_emd
                    ? blogItemData?.thumbnail_image_emd[0]
                    : ''
                }
                dataSource={expDataSourceConstants.CONTENT_LIBRARY}
                staticWidthArr={['1724']}
                height={626}
                width={862}
              />
            ) : (
              <img
                src={placeHolderBlogImage}
                height="626"
                width="862"
                alt="Excore-blog"
                title="Excore-blog"
              />
            )}
          </ExpLinkParser>
        </div>
        <div className="blog-list-caption">
          <div className="blog-list-caption-inner">
            <div className="category-post flex m-b-5">
              {blogItemData?.categories_exp_rel ? (
                <p className="m-b-0 hide">
                  <strong className="m-r-5 hide">
                    {blogItemData?.categories_esai?.length > 1
                      ? 'Categories'
                      : 'Category'}
                    :
                  </strong>
                  {blogItemData?.categories_exp_rel?.map(
                    (item: any, index: number) => (
                      <Fragment key={index.toString()}>
                        <ExpLinkParser to={`${item?.page_slug}`}>
                          <span className="uppercase font-medium">
                            {item?.title}
                          </span>
                        </ExpLinkParser>
                      </Fragment>
                    )
                  )}
                </p>
              ) : (
                ''
              )}
              {blogItemData?.publish_date_edsi ? (
                <p className="m-b-0 posted position-relative">
                  <span className="dark-color">
                    {getFormattedDate(blogItemData?.publish_date_edsi)}
                  </span>
                </p>
              ) : (
                ''
              )}
            </div>
            <h5 className="m-b-16 font-semi-bold heading-font-22">
              <ExpLinkParser to={`${blogItemData?.page_slug}`} className="">
                {blogItemData?.page_title_esi}
              </ExpLinkParser>
            </h5>
            <p
              className="m-b-16 description"
              dangerouslySetInnerHTML={{ __html: blogItemData?.summary_et }}
            />
            <div className="blog-list-author">
              {blogItemData?.author_exp_rel ? (
                <p className="m-b-0 author position-relative">
                  <span className="dark-color">
                    {blogItemData?.author_exp_rel[0]?.title}
                  </span>
                </p>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpBlogItem;
