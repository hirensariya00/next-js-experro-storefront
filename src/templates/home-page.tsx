import { CommonUtilities,  } from '../utilities';

export interface HomePageProps {
  pageData: any;
  components: any;
}

const HomePage = (props: HomePageProps) => {
  const { pageData, components } = props;

  return (
    <div>
      <div className="page-body">
        <div className="page-content">
          {/*<DraggableArea*/}
          {/*  style={{ width: 'auto' }}*/}
          {/*  cssClass={''}*/}
          {/*  id={'home-page-drop1'}*/}
          {/*  components={components}*/}
          {/*  modelField={''}*/}
          {/*  pageData={pageData}*/}
          {/*/>*/}
          {!CommonUtilities.isRenderingOnServer() &&
            !CommonUtilities.isRenderingInHeadlessBrowser()}

          {/*<DraggableArea*/}
          {/*  style={{ width: 'auto' }}*/}
          {/*  cssClass={''}*/}
          {/*  id={'home-page-drop2'}*/}
          {/*  components={components}*/}
          {/*  modelField={''}*/}
          {/*  pageData={pageData}*/}
          {/*/>*/}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
