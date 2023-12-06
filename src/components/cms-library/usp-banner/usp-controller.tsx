'use client'

import { CSSProperties, useEffect } from 'react';
import { ContentModelDataInterface } from '../../../interfaces/content-model-data.interface';
import { getContentLibraryData } from '../../../cms-utils/get-content-library-data';
import { expColorObjectParser } from '../../../cms-utils';
import {
  expCommonDispatcherKeys,
  ExpComponentDataDispatcher,
} from '../../../cms-utils/component-data-dispatcher';

export interface ExpUSPControllerProps {
  id: string;
  headingColor?: string;
  component_content: any;
}

/**
 * Controller function for the USP component.
 * @param props - The controller props.
 * @returns  The controller result.
 */
const ExpUSPController = (props: ExpUSPControllerProps) => {
  const { id, headingColor, component_content } = props;

  const modelKeyForSSR = 'usp-ssr';
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

  const headingTextStyle: CSSProperties = {
    color: expColorObjectParser(headingColor),
  };

  return { componentDataDispatcher, contentModel, headingTextStyle };
};

export default ExpUSPController;
