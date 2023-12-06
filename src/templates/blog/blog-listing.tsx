import { Fragment, useCallback, useEffect, useState } from 'react';
import { ContentService } from '../../services';
import ExpBlogItem from './blog-item';
import { ExpLoadMore } from '../../components/common-components/load-more';
import ExpLatestBlog from './latest-blog';
import ExpBlogCategories from './blog-categories';

export interface ExpBlogListingProps {
  pageData: any;
}

const ExpBlogListing = (props: ExpBlogListingProps) => {
  const { pageData } = props;
  const [postData, setPostData] = useState<any>([]);
  const [skipCount, setSkipCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState<number>(0);
  const getFilterString = () => {
    let filter = '';
    if (pageData?.content_model_internal_name === 'categories') {
      filter += `categories_exp_rel:(${pageData?.content_model_data_id})`;
    }
    if (pageData?.content_model_internal_name === 'author') {
      filter += `author_exp_rel:(${pageData?.content_model_data_id})`;
    }
    return filter;
  };

  const getAPIQueryObject = () => {
    let queryObject: any = {
      modelInternalName: 'posts',
      fieldsToQuery:
        'summary_et,page_slug,page_title_esi,thumbnail_image_emd,publish_date_edsi',
      sortBy: 'created_at',
      sortType: 'asc',
      contentDataSortBy: 'created_at',
      relationField: 'categories_exp_rel,author_exp_rel', // need to give the relation field name to get the data, e.g. here we want to get relation data for categories so need to pass it
      relationFieldDataToQuery: 'page_slug,title',
      skip: `${skipCount}`,
      limit: '6',
    };
    if (window.location.pathname !== '/blog/') {
      queryObject = { ...queryObject, filter: getFilterString() };
      queryObject = {
        ...queryObject,
        fieldKey: 'categories_exp_rel',
        fieldValue: `*${pageData?.content_model_data_id}*`,
      };
    } else {
      queryObject = { ...queryObject, fieldKey: 'id', fieldValue: '*' };
    }
    return queryObject;
  };

  //Get post Data by category wise
  const getPostData = useCallback(async () => {
    try {
      let apiPostListingData =
        await ContentService.getContentModelRecordsByFieldKeyValue(
          getAPIQueryObject()
        );

      setTotalCount(apiPostListingData?.Data?.total_record);

      apiPostListingData = apiPostListingData?.Data?.items?.sort(
        (item1: any, item2: any) =>
          item1.created_at > item2.created_at
            ? 1
            : item1.created_at < item2.created_at
            ? -1
            : 0
      );

      setPostData([...postData, ...apiPostListingData]);
      setIsLoading(false);
    } catch (error: any) {
      //TODO: add proper error message
      // eslint-disable-next-line no-console
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skipCount, isLoading, postData]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getPostData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skipCount]);

  return (
    <>
      {!isLoading && postData && (
        <>
          <div className="page-header-section">
            <div className="container text-center">
              <h1 className="page-title text-center">
                {window.location.pathname === '/blog/'
                  ? 'Blog'
                  : pageData?.page_title_esi}
              </h1>
            </div>
          </div>
          <div className="page-content">
            <div className="container-small">
              {/* Desktop Category */}
              <ExpBlogCategories setCategoriesData={''} />
              <ExpLatestBlog />
              <div className="row gutter-large ">
                {postData?.map((item: any) => (
                  <Fragment key={item.id}>
                    <ExpBlogItem blogItemData={item} />
                  </Fragment>
                ))}
              </div>
              {totalCount > 6 && skipCount + 6 < totalCount && (
                <>
                  <div className="blog-list-action text-center m-t-96">
                    <ExpLoadMore
                      limit={6}
                      setSkip={setSkipCount}
                      skip={skipCount}
                      total_count={totalCount}
                      load_more_message="Show More"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ExpBlogListing;
