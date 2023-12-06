//@ts-nocheck
'use client'
import {CSSProperties, useEffect} from 'react';
// import {IsCMSApp} from 'experro-storefront';
import {getContentLibraryData} from '../../../cms-utils/get-content-library-data';
import {expColorObjectParser} from '../../../cms-utils';
import {
    expCommonDispatcherKeys,
    ExpComponentDataDispatcher,
} from '../../../cms-utils/component-data-dispatcher';
import {slideUp, slideDown} from './utils';

interface ExpAccordionBlockControllerProps {
    id: string;
    headingColor?: string;
    subHeadingTextColor?: string;
    titleColor?: string;
    descriptionColor?: string;
    backgroundColor?: string;
    component_content: any;
}

/**
 * Controller function for the ExpAccordionBlock component.
 * @param props - The controller props.
 * @returns The controller result.
 */
const ExpAccordionBlockController = (
    props: ExpAccordionBlockControllerProps
) => {
    const IsCMSApp = true
    const {
        id,
        headingColor,
        subHeadingTextColor,
        titleColor,
        descriptionColor,
        backgroundColor,
        component_content,
    } = props;

    const modelKeyForSSR = 'faq-ssr';
    let parsedContentModel: any | undefined;

    const {contentModel, modelInternalName} = JSON.parse(
        component_content === undefined ? '{}' : component_content
    );

    const handleElement = (element: any) => {
        const headingTag = element?.target
        const descriptionTag = headingTag.nextSibling
        const descriptionClassList = headingTag.nextSibling?.classList
        /*
        here there are three possibilities
        1. opening any tab for 1st time
        2. it would be same tab (for closing the current tab)
        3. opening another tab after viewing any tab
        */
        if (!Object.values(descriptionClassList || []).includes('is-expanded')) {
            const parantialChildList = headingTag?.parentElement?.parentElement?.childNodes
            parantialChildList?.forEach((item: any) => {
                if (Object.values(item?.childNodes[1]?.classList || []).includes('is-expanded')) {
                    item?.childNodes[1]?.classList?.remove('is-expanded')
                    slideUp(item?.childNodes[1])
                }
            })

            headingTag.nextSibling?.classList?.add('is-expanded')
            slideDown(descriptionTag)

        } else {
            headingTag.nextSibling?.classList?.remove('is-expanded')
            slideUp(descriptionTag)
        }
    }


    const headingStyle: CSSProperties = {
        color: expColorObjectParser(headingColor),
    };
    const subHeadingStyle: CSSProperties = {
        color: expColorObjectParser(subHeadingTextColor),
    };
    const titleStyle: CSSProperties = {
        color: expColorObjectParser(titleColor),
    };
    const descriptionStyle: CSSProperties = {
        color: expColorObjectParser(descriptionColor),
    };
    const backgroundStyle: CSSProperties = {
        backgroundColor: expColorObjectParser(backgroundColor),
    };

    if (contentModel?.trim().length)
        parsedContentModel = JSON.parse(contentModel);
    const {
        setComponentDataDispatcher,
        componentDataDispatcher,
        isComponentLoaded,
    } = ExpComponentDataDispatcher({
        id,
        modelInternalName,
        modelKeyForSSR,
    });

    useEffect(() => {
        if (isComponentLoaded) {
            //@ts-ignore
            setComponentDataDispatcher({
                type: expCommonDispatcherKeys.fetchingData,
            });
            if (contentModel?.trim()?.length) {
                (async () => {
                    //@ts-ignore
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

    useEffect(() => {
        if (IsCMSApp) {
            Array.from(
                document.querySelectorAll<HTMLElement>('.accordion-description')
            ).forEach((element: HTMLElement) => {
                if (element?.style) {
                    element.style.display = 'none'
                }
            });
        } else {
            const gjsFrame = document.querySelector(
                '.gjs-frame'
            ) as HTMLIFrameElement | null;
            if (gjsFrame) {
                const iframeDocument =
                    gjsFrame.contentDocument || gjsFrame.contentWindow?.document;
                Array.from(
                    iframeDocument?.querySelectorAll<HTMLElement>(
                        '.accordion-description'
                    ) || []
                ).forEach((element: HTMLElement) => {
                    if (element?.style) {
                        element.style.display = 'none'
                    }
                });
            }
        }
        /* eslint-disable-next-line */
    }, [componentDataDispatcher?.componentData?.faqs_com]);

    return {
        componentDataDispatcher,
        contentModel,
        headingStyle,
        subHeadingStyle,
        titleStyle,
        descriptionStyle,
        backgroundStyle,
        handleElement
    };
};

export default ExpAccordionBlockController;
