'use client'

import { CSSProperties, useEffect } from 'react';
import { ContentService } from '../../../services';
import { expColorObjectParser } from '../../../cms-utils';
import { expDataSourceConstants } from '../../../cms-utils/constants';
import { getContentLibraryData } from '../../../cms-utils/get-content-library-data';
import { ContentModelDataInterface } from '../../../interfaces/content-model-data.interface';
import {
  expCommonDispatcherKeys,
  ExpComponentDataDispatcher,
} from '../../../cms-utils/component-data-dispatcher';

interface ExpTitleSectionControllerProps {
  id: string;
  titleTextColor?: string;
  subTitleTextColor?: string;
  component_content: any;
  backgroundColor?: string;
}

/**
 * Controller function for the TitleSection component.
 * @param props - The controller props.
 * @returns The controller result.
 */
const ExpTitleSectionController = (props: ExpTitleSectionControllerProps) => {
  const {
    id,
    titleTextColor,
    subTitleTextColor,
    component_content,
    backgroundColor,
  } = props;

  const modelKeyForSSR = 'ts-ssr';
  const {
    dataSource,
    titleText,
    descriptionText,
    iconLink,
    iconTitle,
    contentModel,
    modelInternalName,
  } = JSON.parse(component_content === undefined ? '{}' : component_content);

  const { componentDataDispatcher, setComponentDataDispatcher } =
    ExpComponentDataDispatcher({
      id,
      modelInternalName: modelInternalName,
      modelKeyForSSR: modelKeyForSSR,
    });

  // Object Mapping
  let mappingObj = {
    titleText: ContentService.parseVariableValue(titleText),
    descriptionText: ContentService.parseVariableValue(descriptionText),
    iconLink: ContentService.parseVariableValue(iconLink),
    iconTitle: ContentService.parseVariableValue(iconTitle),
  };
  const contentLibraryMappingObj = {
    titleText: ContentService.parseVariableValue(
      componentDataDispatcher?.componentData?.heading_et
    ),
    descriptionText: ContentService.parseVariableValue(
      componentDataDispatcher?.componentData?.sub_heading_et
    ),
    iconLink: ContentService.parseVariableValue(
      componentDataDispatcher?.componentData?.icon_link_et
    ),
    iconTitle: ContentService.parseVariableValue(
      componentDataDispatcher?.componentData?.icon_title_et
    ),
  };
  if (dataSource === expDataSourceConstants?.CONTENT_LIBRARY) {
    mappingObj = Object.assign(mappingObj, contentLibraryMappingObj);
  }

  let parsedContentModel: ContentModelDataInterface | undefined;
  if (contentModel?.trim().length) {
    parsedContentModel = JSON.parse(contentModel);
  }

  useEffect(() => {
    if (dataSource === expDataSourceConstants?.FREE_FORM) {
      setComponentDataDispatcher({
        type: expCommonDispatcherKeys?.initializingFreeForm,
      });
    } else if (
      dataSource === expDataSourceConstants?.CONTENT_LIBRARY &&
      contentModel?.trim()?.length
    ) {
      (async () => {
        setComponentDataDispatcher({
          type: expCommonDispatcherKeys?.fetchingData,
        });
        setComponentDataDispatcher({
          type: expCommonDispatcherKeys?.dataFetched,
          data: await getContentLibraryData(
            parsedContentModel,
            modelInternalName,
            modelKeyForSSR,
            id
          ),
        });
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentModel, dataSource]);

  // Component Styling Properties
  const titleTextStyle: CSSProperties = {
    color: expColorObjectParser(titleTextColor),
  };
  const backgroundStyle: CSSProperties = {
    backgroundColor: expColorObjectParser(backgroundColor),
  };
  const subTitleTextStyle: CSSProperties = {
    color: expColorObjectParser(subTitleTextColor),
  };

  return {
    dataSource,
    mappingObj,
    componentDataDispatcher,
    contentModel,
    backgroundStyle,
    titleTextStyle,
    subTitleTextStyle,
  };
};

export default ExpTitleSectionController;
