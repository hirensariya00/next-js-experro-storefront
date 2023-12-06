import Login from '../../components/e-commerce/login/login';

const LoginPage = () => {
  return (
    <div>
      <div className="page-body">
        <div className="page-header-section m-t-30">
          <div className="container">
            <h1 className="page-title text-center">Login</h1>
          </div>
        </div>
        <div className="page-content">
          <div className="container">
            <div className="login-from-wrap">
              <div className="row flex align-center justify-center">
                <div className="col col-4 col-tab-12 login-form-block">
                  <Login isRedirect={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
