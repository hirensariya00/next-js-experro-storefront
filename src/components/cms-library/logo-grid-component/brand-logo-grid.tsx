import ExpBrandLogoGridController from './brand-logo-grid-controller';
import { ExpLoadingPlaceholder } from '../../common-components/loading-placeholder';
import ExpLinkParser from '../../../cms-utils/link-parser';
import { ExpCustomImageRenderer } from '../../common-components/custom-image-rendrer';
import { expDataSourceConstants } from '../../../cms-utils/constants';

export interface ExpBrandLogoGridProps {
  id: string;
  component_content: any;
}

/**
 * Renders a Brand Logo component.
 * @param props - The Brand Logo component props.
 * @returns The rendered Brand Logo component.
 */
const ExpBrandLogoGrid = (props: ExpBrandLogoGridProps) => {
  const { id, component_content } = props;
  const staticWidthArr: string[] = ['1280', '768'];
  const { componentDataDispatcher, contentModel } = ExpBrandLogoGridController({
    id,
    component_content,
  });

  return (
    <>
      <ExpLoadingPlaceholder
        loaderClassName="manufacturers-section column-5 section-gap"
        contentModel={contentModel}
        isLoading={componentDataDispatcher.isLoading}
        componentData={componentDataDispatcher.componentData}
      />

      {componentDataDispatcher.componentData?.id &&
        !componentDataDispatcher.isLoading && (
          <div className="manufacturers-section section-gap">
            <div className="container">
              <div className="flex justify-center">
                <div className="col-1 col-10 col-md-12">
                  <div className="row flex flex-wrap manufacturers-listing">
                    {componentDataDispatcher?.componentData?.logo_list_com
                      ?.length &&
                      componentDataDispatcher?.componentData?.logo_list_com?.map(
                        (item: any, index: number) => {
                          return (
                            <div
                              key={index.toString()}
                              className="col col-3 col-mob-4 col-xs-6 flex align-center justify-center brand-item">
                              {item?.slider_link_et ? (
                                <ExpLinkParser
                                  to={item?.slider_link_et}
                                  ariaLabel="brand image">
                                  <div className="has-img">
                                    {item?.slider_image_emd && (
                                      <ExpCustomImageRenderer
                                        dataSource={
                                          expDataSourceConstants?.CONTENT_LIBRARY
                                        }
                                        contentLibraryImageData={
                                          item?.slider_image_emd
                                            ? item?.slider_image_emd[0]
                                            : ''
                                        }
                                        height="88"
                                        width="315"
                                        staticWidthArr={staticWidthArr}
                                      />
                                    )}
                                  </div>
                                </ExpLinkParser>
                              ) : (
                                <ExpLinkParser
                                  to={item?.slider_link_et}
                                  ariaLabel="brand image"
                                  rel="nofollow">
                                  <div className="has-img">
                                    {item?.slider_image_emd && (
                                      <ExpCustomImageRenderer
                                        dataSource={
                                          expDataSourceConstants?.CONTENT_LIBRARY
                                        }
                                        contentLibraryImageData={
                                          item?.slider_image_emd
                                            ? item?.slider_image_emd[0]
                                            : ''
                                        }
                                        height="88"
                                        width="315"
                                        staticWidthArr={staticWidthArr}
                                        aria-label="brand image"
                                      />
                                    )}
                                  </div>
                                </ExpLinkParser>
                              )}
                            </div>
                          );
                        }
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default ExpBrandLogoGrid;
