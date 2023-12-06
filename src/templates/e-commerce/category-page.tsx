import ExpCategoryLandingPage from '../../components/e-commerce/category-page/category-page/category-page';

export interface ExpCategoryPageProps {
  pageData: any;
  components: any;
}
const ExpCategoryPage = (props: ExpCategoryPageProps) => {
  const { pageData, components } = props;

  return (
    <div>
      <ExpCategoryLandingPage pageData={pageData} components={components} />
    </div>
  );
};

export default ExpCategoryPage;
