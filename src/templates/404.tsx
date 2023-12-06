const Page404 = () => {
  return (
    <div>
      <div className="page-body page404-page-template">
        <div className="page-header-section">
          <div className="container text-center">
            <h1 className="page-title text-center m-b-40">
              404 Error - Page Not Found
            </h1>
            <p className="m-b-0 m-t-10">
              Uh oh, looks like the page you are looking for has moved or no
              longer exists.
            </p>
          </div>
        </div>

        <div className="page-content m-t-40">
          <div className="container-small">
            <div className="row flex justify-center">
              <form
                action="/search"
                className="col col-8 col-tab-12 form-inline">
                <input type="text" name="q" className="form-input" />
                <button className="button">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
