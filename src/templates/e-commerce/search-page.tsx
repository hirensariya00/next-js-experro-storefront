import ExpCategoryLandingPage from '../../components/e-commerce/category-page/category-page/category-page';
/* eslint-disable*/
// TODO: Disabled eslint due to component is not used anywhere

export interface SearchPageProps {
  pageData: any;
}

const SearchPage = (props: SearchPageProps) => {
  const { pageData } = props;

  return (
    <div>
      <ExpCategoryLandingPage pageData={pageData} />
    </div>
  );
};
export default SearchPage;
