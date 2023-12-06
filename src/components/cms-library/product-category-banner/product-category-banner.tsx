import { ExpLoadingPlaceholder } from '../../common-components/loading-placeholder';
import ExpProductCategoryBannerController from './product-category-banner-contoller';
import { ExpCustomImageRenderer } from '../../common-components/custom-image-rendrer';
import { expDataSourceConstants } from '../../../cms-utils';

export interface ExpProductCategoryBannerProps {
  id: string;
  component_content: any;
  bannerType: string;
}

/**
 * Renders a Product Category component.
 * @param props - The Product Category component props.
 * @returns The rendered Product Category component.
 */
const ExpProductCategoryBanner = (props: ExpProductCategoryBannerProps) => {
  const { id, component_content, bannerType } = props;

  const staticWidthArr: string[] = ['1280', '768', '568', '200'];
  const { componentDataDispatcher, contentModel } =
    ExpProductCategoryBannerController({
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
          <div
            className={`${
              bannerType === 'banner-1'
                ? 'product-category-card-with-bg'
                : 'product-category-card'
            } section-gap`}>
            <div className="container">
              <div className="row">
                {componentDataDispatcher?.componentData?.product_item_com &&
                  componentDataDispatcher?.componentData?.product_item_com?.map(
                    (item: any, index: number) => {
                      return (
                        <div
                          key={index?.toString()}
                          className={`col ${
                            bannerType === 'banner-1' ? 'col-md-4' : 'col-3'
                          }  col-tab-6`}>
                          <div
                            className={`product-item ${
                              bannerType === 'banner-1'
                                ? ''
                                : 'position-relative'
                            }`}>
                            <div
                              className={`${
                                bannerType === 'banner-1'
                                  ? 'product-img'
                                  : 'product-category-img'
                              }`}>
                              {item?.product_image_emd && (
                                <ExpCustomImageRenderer
                                  dataSource={
                                    expDataSourceConstants?.CONTENT_LIBRARY
                                  }
                                  contentLibraryImageData={
                                    item?.product_image_emd
                                      ? item?.product_image_emd[0]
                                      : ''
                                  }
                                  height={
                                    bannerType === 'banner-1' ? '196' : '280'
                                  }
                                  width={
                                    bannerType === 'banner-1' ? '240' : '376'
                                  }
                                  staticWidthArr={staticWidthArr}
                                />
                              )}
                            </div>
                            {item?.heading_et && (
                              <div className="image-caption">
                                {bannerType === 'banner-1' ? (
                                  <h6
                                    dangerouslySetInnerHTML={{
                                      __html: item?.heading_et,
                                    }}
                                  />
                                ) : (
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: item?.heading_et,
                                    }}
                                  />
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default ExpProductCategoryBanner;
