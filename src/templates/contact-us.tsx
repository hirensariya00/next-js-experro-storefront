// import { DraggableArea } from 'experro-storefront';
import components from '../components';
import ExpBreadcrumb from '../components/common-components/breadcrumb/breadcrumb';

export interface ContactPageProps {
  pageData: any;
}

const ContactPage = (props: ContactPageProps) => {
  const { pageData } = props;

  return (
    <div className="page-body">
      {/*<DraggableArea*/}
      {/*  style={{ width: 'auto' }}*/}
      {/*  cssClass={''}*/}
      {/*  id={'cms-page-drop1'}*/}
      {/*  components={components}*/}
      {/*  modelField={''}*/}
      {/*  pageData={pageData}*/}
      {/*/>*/}

      {pageData?.seo_com?.length && <ExpBreadcrumb pageData={pageData} />}

      {pageData?.page_title_esi &&
        pageData?.settings_com &&
        pageData?.settings_com[0]?.show_page_title_eb && (
          <div className="page-header-section m-t-30">
            <div className="container">
              <h1 className="page-title font-large text-center">
                {pageData?.page_title_esi}
              </h1>
            </div>
          </div>
        )}

      <div className="page-content">
        <div className="container-x-small">
          <p className="text-center">
            {pageData?.description_eti?.length && (
              <div
                className="page-content-style"
                dangerouslySetInnerHTML={{
                  __html: pageData?.description_eti,
                }}
              />
            )}
          </p>
        </div>
      </div>

      {/*<DraggableArea*/}
      {/*  style={{ width: 'auto' }}*/}
      {/*  cssClass={''}*/}
      {/*  id={'cms-page-drop2'}*/}
      {/*  components={components}*/}
      {/*  modelField={''}*/}
      {/*  pageData={pageData}*/}
      {/*/>*/}
    </div>
  );
};

export default ContactPage;
