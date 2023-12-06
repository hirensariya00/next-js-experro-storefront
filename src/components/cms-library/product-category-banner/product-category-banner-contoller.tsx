'use client'
import { useEffect } from 'react';
import { ContentModelDataInterface } from '../../../interfaces/content-model-data.interface';
import { getContentLibraryData } from '../../../cms-utils';
import {
  ExpComponentDataDispatcher,
  expCommonDispatcherKeys,
} from '../../../cms-utils/component-data-dispatcher';

interface ExpProductCategoryBannerControllerProps {
  id: string;
  component_content: any;
}

/**
 * Controller function for the ProductCategoryBanner component.
 * @param  props - The controller props.
 * @returns  The controller result.
 */
const ExpProductCategoryBannerController = (
  props: ExpProductCategoryBannerControllerProps
) => {
  const { id, component_content } = props;

  const modelKeyForSSR = 'product-category-ssr';
  const { contentModel, modelInternalName } = JSON.parse(
    component_content === undefined ? '{}' : component_content
  );
  const {
    componentDataDispatcher,
    setComponentDataDispatcher,
    isComponentLoaded,
  } = ExpComponentDataDispatcher({
    id,
    modelInternalName: modelInternalName,
    modelKeyForSSR: modelKeyForSSR,
  });

  let parsedContentModel: ContentModelDataInterface | undefined;

  if (contentModel?.trim().length)
    parsedContentModel = JSON.parse(contentModel);

  useEffect(() => {
    if (isComponentLoaded) {
      setComponentDataDispatcher({
        type: expCommonDispatcherKeys.fetchingData,
      });
      if (contentModel?.trim()?.length) {
        (async () => {
          setComponentDataDispatcher({
            type: expCommonDispatcherKeys.dataFetched,
            data: await getContentLibraryData(
              parsedContentModel,
              modelInternalName,
              modelKeyForSSR,
              id
            ),
          });
        })();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentModel]);

  return { componentDataDispatcher, contentModel };
};

export default ExpProductCategoryBannerController;
