import ExpCategoryLandingPage from '../../components/e-commerce/category-page/category-page/category-page';

export interface BrandPageProps {
  pageData: any;
  components: any;
}
const BrandPage = (props: BrandPageProps) => {
  const { pageData, components } = props;

  return (
    <div>
      <ExpCategoryLandingPage pageData={pageData} components={components} />
    </div>
  );
};

export default BrandPage;
