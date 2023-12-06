/* eslint-disable*/
// TODO: Disabled eslint due to component is not used anywhere
//@ts-ignore
import { Link } from 'experro-storefront';

export interface CMSDemoPageProps {
  pageData: any;
  components: any;
}

const CMSDemoPage = ({ pageData, components }: CMSDemoPageProps) => {
  return (
    <div>
      <div className="page-body">
        <div className="page-content">
          <div className="container">
            <h1>Heading 1</h1>

            <h2>Heading 2</h2>

            <h3>Heading 3</h3>

            <h4>Heading 4</h4>

            <h5>Heading 5</h5>

            <h6>Heading 6</h6>

            <p>
              <strong>Paragraph style:</strong>&nbsp;
              <a href="#">Lorem ipsum dolor sit amet,</a>&nbsp;consectetur
              adipiscing elit.&nbsp;<em>Nullam eget tristique arcu.</em>
              &nbsp;Sed id faucibus dui, et vestibulum nulla. Integer nunc mi,
              luctus et ipsum in, lobortis faucibus nunc. Praesent sagittis,
              dolor a dapibus suscipit, elit dolor dignissim est, non dictum
              sapien purus id tellus. Ut sapien erat, dictum id lorem non,
              ullamcorper tincidunt ipsum. Fusce vulputate dapibus nisi sit amet
              malesuada. Suspendisse iaculis cursus leo. Maecenas blandit mauris
              ac vulputate elementum. Integer cursus non lacus ac suscipit.
              Morbi at nulla ornare, venenatis tellus eget, cursus eros. Fusce
              ut aliquam diam. Sed at congue risus. Donec lacinia, erat id
              iaculis pharetra, ante eros vestibulum metus, sed laoreet nulla
              nulla a lacus. Integer hendrerit eu odio vitae faucibus.
            </p>

            <div className="m-b-30">
              <a className="button" href="#">
                Button default
              </a>
              <a className="button button-small" href="#">
                Button medium
              </a>
              <a className="button button-xsmall" href="#">
                Small
              </a>
            </div>
            <div className="m-b-30">
              <a className="button button-transparent" href="#">
                Button transparent
              </a>
            </div>

            <form className="section-gap">
              <div>
                <label htmlFor="input" className="form-label">
                  Input
                </label>
                <input
                  className="form-input"
                  id="input"
                  type="text"
                  placeholder="Search by product name, brand name or part #"
                />
              </div>
              <div className="m-t-50">
                <label htmlFor="text" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-textarea"
                  id="text"
                  placeholder="Message"
                  rows={5}></textarea>
              </div>
              <div className="m-t-50">
                <label htmlFor="cars" className="form-label">
                  Select
                </label>
                <select className="form-select" name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* two-col-image-section */}
      <div className="two-col-image-section section-gap">
        <div className="container">
          <div className="row">
            <div className="col col-6 col-tab-12">
              <div className="two-col-image-content position-relative">
                <div className="two-col-img">
                  <img
                    src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/5548fa69-fae9-4de2-b589-75a200ab9b34?expected_file_type=png"
                    alt="Image-1"
                    title="Image-1"
                    height={468}
                    width={724}
                  />
                </div>
                <div className="image-caption">
                  <h5>New products</h5>
                  <p>Vestibulum ante ipsum primis in faucibus orci luctus</p>
                  <button className="button">Shop now</button>
                </div>
              </div>
            </div>
            <div className="col col-6 col-tab-12">
              <div className="two-col-image-content position-relative">
                <div className="two-col-img">
                  <img
                    src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/7b9d337d-6544-4db8-b182-6f21c2ea3192?expected_file_type=png"
                    alt="Image-2"
                    title="Image-2"
                    height={468}
                    width={724}
                  />
                </div>
                <div className="image-caption">
                  <h5>New products</h5>
                  <p>Vestibulum ante ipsum primis in faucibus orci luctus</p>
                  <button className="button">Shop now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* five-grid-layout */}
      <div className="five-grid-section section-gap">
        <div className="container">
          <div className="row">
            <div className="five-grid-layout">
              <div className="div-large position-relative">
                <div className="col">
                  <div className="large-img has-image-fill">
                    <img
                      src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/9d395cde-6356-4d4a-92c2-e16fc504f3c1?expected_file_type=png"
                      alt="large-img"
                      title="large-img"
                      height={700}
                      width={472}
                    />
                  </div>
                  <div className="image-caption">
                    <h5>New products</h5>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus</p>
                    <Link to="" className="show-link">
                      Shop now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="div-small position-relative">
                <div className="col">
                  <div className="small-img has-image-fill">
                    <img
                      src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/1b0cdde4-deaf-4166-8d8c-e4473e0c30ac?expected_file_type=png"
                      alt="small-img"
                      title="small-img"
                      height={334}
                      width={472}
                    />
                  </div>
                  <div className="image-caption">
                    <h5>New products</h5>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus</p>
                    <Link to="" className="show-link">
                      Shop now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="div-small position-relative">
                <div className="col">
                  <div className="small-img has-image-fill">
                    <img
                      src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/4f056d2a-bd5b-465a-9d45-0ad65a7163f3?expected_file_type=png"
                      alt="small-img"
                      title="small-img"
                      height={334}
                      width={472}
                    />
                  </div>
                  <div className="image-caption">
                    <h5>New products</h5>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus</p>
                    <Link to="" className="show-link">
                      Shop now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="div-small position-relative">
                <div className="col">
                  <div className="small-img has-image-fill">
                    <img
                      src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/c293de1d-7b20-4262-ae35-b59f7e9dfacd?expected_file_type=png"
                      alt="small-img"
                      title="small-img"
                      height={334}
                      width={472}
                    />
                  </div>
                  <div className="image-caption">
                    <h5>New products</h5>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus</p>
                    <Link to="" className="show-link">
                      Shop now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="div-small position-relative">
                <div className="col">
                  <div className="small-img has-image-fill">
                    <img
                      src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/26625cef-2b0a-4880-8e26-7e4b8bd17394?expected_file_type=png"
                      alt="small-img"
                      title="small-img"
                      height={334}
                      width={472}
                    />
                  </div>
                  <div className="image-caption">
                    <h5>New products</h5>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus</p>
                    <Link to="" className="show-link">
                      Shop now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two-Product-with-image-section */}
      <div className="product-with-image-section two-product-image section-gap">
        <div className="container">
          <div className="row">
            <div className="col col-6">
              <div className="image-content position-relative">
                <div className="product-image-main has-image-fill">
                  <img
                    src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/564518c6-49dd-477e-86e8-23d2b8557886?expected_file_type=png"
                    alt="Product-main-img"
                    title="Product-main-img"
                    height={468}
                    width={724}
                  />
                </div>
                <div className="image-caption">
                  <h4>Couch for Living</h4>
                  <p>New Arrivals In</p>
                </div>
              </div>
            </div>
            <div className="col col-6"></div>
          </div>
        </div>
      </div>

      {/* one-product-with-image-section */}
      <div className="product-with-image-section one-product-image section-gap">
        <div className="container">
          <div className="row">
            <div className="col col-3"></div>
            <div className="col col-9">
              <div className="image-content position-relative">
                <div className="product-image-main has-image-fill">
                  <img
                    src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/4921daba-cc84-40fa-8ce5-a86ba90516f6?expected_file_type=png"
                    alt="Product-main-img"
                    title="Product-main-img"
                    height={468}
                    width={724}
                  />
                </div>
                <div className="image-caption">
                  <h4>Couch for Living</h4>
                  <p>New Arrivals In</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog-section */}
      <div className="blog-section section-gap">
        <div className="container">
          <div className="blog-heading flex justify-space align-center">
            <h4>Latest Blog</h4>
            <Link to="" className="text-underline">
              View More
            </Link>
          </div>
          <div className="row">
            <div className="col col-6 col-sm-12 banner-item">
              <div className="blog-content">
                <div className="blog-image">
                  <img
                    src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/18b9a22e-64e9-49d6-bd69-c0bcdefb0ac6?expected_file_type=png"
                    alt="blog-image"
                    title="blog-image"
                    height={400}
                    width={721}
                  />
                </div>
                <div className="image-caption">
                  <p className="heading-24">
                    <strong>
                      Furniture industry has been dominated by the unorganised
                      space.
                    </strong>
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <Link to="" className="text-underline">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col-6 col-sm-12 banner-item">
              <div className="blog-content">
                <div className="image-caption">
                  <p className="heading-24">
                    <strong>
                      Furniture industry has been dominated by the unorganised
                      space.
                    </strong>
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <Link to="" className="text-underline">
                    Read More
                  </Link>
                </div>
                <div className="blog-image">
                  <img
                    src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/ba3d75a6-7b3b-4524-bf7c-b1fca82df28c?expected_file_type=png"
                    alt="blog-image"
                    title="blog-image"
                    height={400}
                    width={721}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product-category-card */}
      <div className="product-category-card section-gap">
        <div className="container">
          <div className="row">
            <div className="col col-3 col-tab-6">
              <div className="product-item position-relative">
                <div className="product-category-img">
                  <img
                    src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/74c9acfe-266c-49d1-87bf-063d7ea7a304?expected_file_type=png"
                    alt="product-img"
                    title="product-img"
                    height={280}
                    width={376}
                  />
                </div>
                <div className="image-caption">
                  <p>Sofa</p>
                </div>
              </div>
            </div>
            <div className="col col-3 col-tab-6">
              <div className="product-item position-relative">
                <div className="product-category-img">
                  <img
                    src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/546e7604-7da2-40d3-9202-2ee76ffe4580?expected_file_type=png"
                    alt="product-img"
                    title="product-img"
                    height={280}
                    width={376}
                  />
                </div>
                <div className="image-caption">
                  <p>Arm Chair</p>
                </div>
              </div>
            </div>
            <div className="col col-3 col-tab-6">
              <div className="product-item position-relative">
                <div className="product-category-img">
                  <img
                    src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/0a4044ab-e41d-4642-b62e-4b5de9a9ab18?expected_file_type=png"
                    alt="product-img"
                    title="product-img"
                    height={280}
                    width={376}
                  />
                </div>
                <div className="image-caption">
                  <p>Hanging lamp</p>
                </div>
              </div>
            </div>
            <div className="col col-3 col-tab-6">
              <div className="product-item position-relative">
                <div className="product-category-img">
                  <img
                    src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/afeb30e1-8c5a-4573-a887-cf4aef1b6070?expected_file_type=png"
                    alt="product-img"
                    title="product-img"
                    height={280}
                    width={376}
                  />
                </div>
                <div className="image-caption">
                  <p>Table</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product-category-card-with-bg */}
      <div className="product-category-card-with-bg section-gap">
        <div className="container">
          <div className="row">
            <div className="col col-md-4 col-tab-6">
              <div className="product-item">
                <div className="product-img">
                  <img
                    src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/6d709c94-d34b-4f2d-b657-e354b80f70dd?expected_file_type=png"
                    alt="product-img"
                    title="product-img"
                    height={196}
                    width={240}
                  />
                </div>
                <div className="image-caption">
                  <h6>Sofa</h6>
                </div>
              </div>
            </div>
            <div className="col col-md-4 col-tab-6">
              <div className="product-item">
                <div className="product-img">
                  <img
                    src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/cabe403a-819f-4fe9-982b-3d1da720de57?expected_file_type=png"
                    alt="product-img"
                    title="product-img"
                    height={196}
                    width={240}
                  />
                </div>
                <div className="image-caption">
                  <h6>Chairs</h6>
                </div>
              </div>
            </div>
            <div className="col col-md-4 col-tab-6">
              <div className="product-item">
                <div className="product-img">
                  <img
                    src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/254a8a28-8959-421c-9b05-2c1cdf5d04dd?expected_file_type=png"
                    alt="product-img"
                    title="product-img"
                    height={196}
                    width={240}
                  />
                </div>
                <div className="image-caption">
                  <h6>Hanging lamps</h6>
                </div>
              </div>
            </div>
            <div className="col col-md-4 col-tab-6">
              <div className="product-item">
                <div className="product-img">
                  <img
                    src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/3de3fb4e-1a14-4820-beda-98f9be58df4a?expected_file_type=png"
                    alt="product-img"
                    title="product-img"
                    height={196}
                    width={240}
                  />
                </div>
                <div className="image-caption">
                  <h6>Tables</h6>
                </div>
              </div>
            </div>
            <div className="col col-md-4 col-tab-6">
              <div className="product-item">
                <div className="product-img">
                  <img
                    src="https://storage.googleapis.com/experro/media-manager/6e3bab01-edcd-4771-ad05-203ed79042d6/5db6de85-1ccd-416b-931c-e8e651090fb6?expected_file_type=png"
                    alt="product-img"
                    title="product-img"
                    height={196}
                    width={240}
                  />
                </div>
                <div className="image-caption">
                  <h6>Stools</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSDemoPage;
