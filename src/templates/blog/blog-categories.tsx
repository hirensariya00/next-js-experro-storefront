import { useState, useCallback, useEffect, Fragment } from 'react';
import { ContentService } from '../../services';
import ExpLinkParser from '../../cms-utils/link-parser';

interface ExpBlogCategoriesProps {
  setCategoriesData?: any;
}
const ExpBlogCategories = (props: ExpBlogCategoriesProps) => {
  const { setCategoriesData } = props;

  const [categories, setCategories] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const navigate = useNavigate();

  //Function to get all the categories
  const getCategories = useCallback(async () => {
    try {
      let apiDataForCategories =
        await ContentService.getContentModelRecordsByFieldKeyValue({
          modelInternalName: 'categories',
          fieldKey: 'id',
          fieldValue: '*',
          fieldsToQuery: 'page_title_esi,page_slug,content_model_data_id',
          relationField: 'blogs_exp_rel',
          relationFieldDataToQuery: 'page_slug,title',
          sortBy: '',
          sortType: 'asc',
        });
      apiDataForCategories = apiDataForCategories?.Data?.items?.sort(
        (item1: any, item2: any) =>
          item1.created_at > item2.created_at
            ? 1
            : item1.created_at < item2.created_at
              ? -1
              : 0
      );
      setCategories(apiDataForCategories);
      if (setCategoriesData) {
        setCategoriesData(apiDataForCategories);
      }
      setIsLoading(false);
    } catch (error: any) {
      //TODO: add proper error message
      // eslint-disable-next-line no-console
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //change Page URL based on drop down change
  const redirectToCategoryPage = useCallback((title: any) => {
    // navigate(title);
      console.log('test',)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!isLoading && categories && (
        <ul className="blog-category-list list-style-none m-b-80 flex">
          <li
            className={`${window.location.pathname === '/blog/' ? 'current-tab' : ''
              } blog-category-list-item`}>
            <ExpLinkParser to="/blog/" className="x-small-font">
              All
            </ExpLinkParser>
          </li>
          {categories &&
            categories?.map((c_obj: any) => (
              <Fragment key={c_obj?.id?.toString()}>
                <li
                  className={`${window.location.pathname === c_obj?.page_slug
                    ? 'current-tab'
                    : ''
                    } blog-category-list-item
                  `}>
                  <div
                    className="x-small-font"
                    onClick={() => redirectToCategoryPage(c_obj?.page_slug)}>
                    {c_obj?.page_title_esi}
                    {c_obj?.blogs_exp_rel?.length && (
                      <span>({c_obj.blogs_exp_rel.length})</span>
                    )}
                  </div>
                </li>
              </Fragment>
            ))}
        </ul>
      )}
    </>
  );
};

export default ExpBlogCategories;
