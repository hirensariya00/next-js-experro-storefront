import ExpTitleSectionController from './title-section-controller';
import { ExpLoadingPlaceholder } from '../../common-components/loading-placeholder';
import {
  expDataSourceConstants,
  expWidgetConstants,
} from '../../../cms-utils/constants';

export interface ExpTitleSectionProps {
  id: string;
  titleSize: string;
  titleTextColor: string;
  titleTextPosition: string;
  subTitleTextColor: string;
  showSubTitle: string;
  subTitleTextPosition: string;
  subTitleSize: string;
  component_content: any;
  backgroundColor: string;
}

/**
 * Renders a Title Section component.
 * @param props - The Title Section component props.
 * @returns The rendered Title Section component.
 */
const ExpTitleSection = (props: ExpTitleSectionProps) => {
  const {
    id,
    titleSize,
    titleTextColor,
    titleTextPosition,
    subTitleTextColor,
    showSubTitle,
    subTitleTextPosition,
    subTitleSize,
    component_content,
    backgroundColor,
  } = props;

  const {
    dataSource,
    mappingObj,
    componentDataDispatcher,
    contentModel,
    backgroundStyle,
    titleTextStyle,
    subTitleTextStyle,
  } = ExpTitleSectionController({
    id,
    titleTextColor,
    subTitleTextColor,
    component_content,
    backgroundColor,
  });

  return (
    <>
      {dataSource === expDataSourceConstants.CONTENT_LIBRARY && (
        <ExpLoadingPlaceholder
          loaderClassName="section-gap text-with-background-section"
          contentModel={contentModel}
          isLoading={componentDataDispatcher?.isLoading}
          componentData={componentDataDispatcher?.componentData}
        />
      )}

      {(dataSource === expDataSourceConstants.FREE_FORM ||
        (componentDataDispatcher?.componentData?.id &&
          !componentDataDispatcher?.isLoading)) && (
        <section
          style={backgroundStyle}
          className={`section-gap text-with-background-section ${titleTextPosition}`}>
          <div className="container">
            <h1
              className={`${titleSize}`}
              style={titleTextStyle}
              dangerouslySetInnerHTML={{
                __html:
                  mappingObj.titleText?.length ||
                  dataSource === expDataSourceConstants.CONTENT_LIBRARY
                    ? mappingObj.titleText
                    : 'Please enter heading',
              }}
            />
            {showSubTitle === expWidgetConstants.WIDGET_CHECK_TRUE && (
              <div className={subTitleTextPosition}>
                <p
                  className={`m-0 dark-color ${subTitleSize}`}
                  style={subTitleTextStyle}
                  dangerouslySetInnerHTML={{
                    __html:
                      mappingObj.descriptionText?.length ||
                      dataSource === expDataSourceConstants.CONTENT_LIBRARY
                        ? mappingObj.descriptionText
                        : 'Please enter sub heading',
                  }}
                />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default ExpTitleSection;
