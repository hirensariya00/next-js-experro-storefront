//@ts-nocheck
'use client'
import { CSSProperties, useEffect } from 'react';
import { ContentModelDataInterface } from '../../../interfaces/content-model-data.interface';
import { getContentLibraryData, expColorObjectParser } from '../../../cms-utils';
import {
  expCommonDispatcherKeys,
  ExpComponentDataDispatcher,
} from '../../../cms-utils/component-data-dispatcher';

export interface ExpGridBannerControllerProps {
  id: string | undefined;
  component_content: any;
  descriptionColor?: string | undefined;
  headingColor?: string | undefined;
}

/**
 * Controller function for all the ExpGridBanner components.
 * @param props - The controller props.
 * @returns The controller result.
 */
const ExpGridBannerController = (props: ExpGridBannerControllerProps) => {
  const { id, component_content, descriptionColor, headingColor } = props;

  const modelKeyForSSR = 'grid-banner-ssr';
  const { contentModel, modelInternalName } = JSON.parse(
    component_content === undefined ? '{}' : component_content
  );
  const descriptionStyle: CSSProperties = {
    color: expColorObjectParser(descriptionColor),
  };
  const headingStyle: CSSProperties = {
    color: expColorObjectParser(headingColor),
  };

  const {
    componentDataDispatcher,
    setComponentDataDispatcher,
    isComponentLoaded,
  } = ExpComponentDataDispatcher({
    id,
    modelInternalName,
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

  return {
    componentDataDispatcher,
    contentModel,
    descriptionStyle,
    headingStyle,
  };
};

export default ExpGridBannerController;
