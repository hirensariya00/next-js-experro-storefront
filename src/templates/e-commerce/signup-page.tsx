import Signup from '../../components/e-commerce/signup/signup';
/* eslint-disable*/
// TODO: Disabled eslint due to component is not used anywhere
const SignupPage = () => {
  return (
    <div>
      <div className="page-body m-t-30">
        <div className="page-header-section">
          <h1 className="page-title text-center">Create account</h1>
        </div>
        <div className="page-content">
          <div className="container">
            <div className="signup-from-wrap">
              <Signup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
