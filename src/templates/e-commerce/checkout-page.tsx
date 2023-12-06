import Checkout from '../../components/e-commerce/checkout/checkout';
/* eslint-disable*/
// TODO: Disabled eslint due to component is not used anywhere
export interface CheckoutPageProps {
  pageData: any;
  components: any;
}
const CheckoutPage = ({ pageData, components }: CheckoutPageProps) => {
  return (
    <div>
      <Checkout />
    </div>
  );
};

export default CheckoutPage;
