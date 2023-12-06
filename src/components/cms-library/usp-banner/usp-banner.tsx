import ExpUSPController from './usp-controller';
import ExpLinkParser from '../../../cms-utils/link-parser';
import { ExpLoadingPlaceholder } from '../../common-components/loading-placeholder';
import { ExpCustomImageRenderer } from '../../common-components/custom-image-rendrer';
import { expDataSourceConstants, expWidgetConstants } from '../../../cms-utils';

export interface ExpUSPBannerProps {
  id: string;
  component_content: any;
  showHeadingText: string;
  headingSize: string;
  headingPosition: string;
  headingColor: string;
}

/**
 * Renders an USP Banner component.
 * @param props - The USP Banner component props.
 * @returns Rendered USP Banner component.
 */
const ExpUSPBanner = (props: ExpUSPBannerProps) => {
  const {
    id,
    component_content,
    showHeadingText,
    headingSize,
    headingPosition,
    headingColor,
  } = props;
  const staticWidthArr: string[] = ['80'];

  const { componentDataDispatcher, contentModel, headingTextStyle } =
    ExpUSPController({
      id,
      component_content,
      headingColor,
    });

  return (
    <>
      <ExpLoadingPlaceholder
        loaderClassName="usp-banner section-gap"
        contentModel={contentModel}
        isLoading={componentDataDispatcher.isLoading}
        componentData={componentDataDispatcher.componentData}
      />

      {componentDataDispatcher?.componentData?.id &&
        !componentDataDispatcher?.isLoading && (
          <div className="usp-banner section-gap scrollbar-hide">
            {componentDataDispatcher?.componentData?.heading_et &&
              showHeadingText === expWidgetConstants?.WIDGET_CHECK_TRUE && (
                <h4
                  className={`${headingSize} ${headingPosition} m-b-56`}
                  style={headingTextStyle}
                  dangerouslySetInnerHTML={{
                    __html: componentDataDispatcher?.componentData?.heading_et,
                  }}
                />
              )}
            <div className="container">
              <div className="usp-banner-inner usp-banner-bg">
                <div className="row usp-space">
                  {componentDataDispatcher.componentData?.usp_banner_com?.map(
                    (item: any, index: number) => (
                      <div
                        key={index.toString()}
                        className="col flex usp-item flex justify-center">
                        <ExpLinkParser
                          to={`${item?.usp_link_et ? item?.usp_link_et : ''}`}
                          className="flex flex-wrap flex-direction align-center">
                          <div className="usp-icon">
                            <ExpCustomImageRenderer
                              dataSource={
                                expDataSourceConstants?.CONTENT_LIBRARY
                              }
                              contentLibraryImageData={
                                item?.usp_icon_emd ? item?.usp_icon_emd[0] : ''
                              }
                              height="80"
                              width="80"
                              staticWidthArr={staticWidthArr}
                            />
                          </div>
                          <div className="usp-name">
                            <p
                              dangerouslySetInnerHTML={{
                                __html:
                                  item?.usp_title_et && item?.usp_title_et,
                              }}
                            />
                          </div>
                        </ExpLinkParser>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default ExpUSPBanner;
