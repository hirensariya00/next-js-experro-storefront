//@ts-nocheck

import {Fragment} from 'react';
import {ContentService} from '../../../services';
import ExpAccordionBlockController from './accordion-controller';
import {ExpLoadingPlaceholder} from '../../common-components/loading-placeholder';
import ExpLinkParser from '../../../cms-utils/link-parser';
import {expWidgetConstants} from '../../../cms-utils';
import {linkParserStyle} from '../../../cms-utils/link-parser-style';

export interface ExpAccordionBlockProps {
    id: string;
    showHeadingText: string;
    headingSize: string;
    headingPosition: string;
    headingColor: string;
    showSubHeading: string;
    subHeadingPosition: string;
    subHeadingTextColor: string;
    titleColor: string;
    descriptionColor: string;
    showButton: string;
    buttonColor: string;
    buttonTextColor: string;
    buttonHoverColor: string;
    buttonTextHoverColor: string;
    backgroundColor: string;
    component_content: any;
}

/**
 * Renders an accordion block component.
 * @param props - The accordion block component props.
 * @returns The rendered accordion block component.
 */
const ExpAccordionBlock = (props: ExpAccordionBlockProps) => {
    const {
        id,
        showHeadingText,
        headingSize,
        headingPosition,
        headingColor,
        showSubHeading,
        subHeadingPosition,
        subHeadingTextColor,
        titleColor,
        descriptionColor,
        showButton,
        buttonColor,
        buttonTextColor,
        buttonHoverColor,
        buttonTextHoverColor,
        backgroundColor,
        component_content,
    } = props;

    const {
        contentModel,
        componentDataDispatcher,
        descriptionStyle,
        headingStyle,
        subHeadingStyle,
        titleStyle,
        backgroundStyle,
        handleElement
    } = ExpAccordionBlockController({
        id,
        headingColor,
        subHeadingTextColor,
        backgroundColor,
        titleColor,
        descriptionColor,
        component_content,
    });

    const {componentData, isLoading} = componentDataDispatcher;
    const {faqs_com, faqs_button_com} = componentData;
    const {WIDGET_CHECK_TRUE} = expWidgetConstants;

    return (
        <>
            <ExpLoadingPlaceholder
                loaderClassName="accordion-section section-gap"
                contentModel={contentModel}
                isLoading={isLoading}
                componentData={componentData}
            />

            {!!(componentData?.id && !isLoading) && (
                <>
                    <style>
                        {`#${id} .accordion_button.accordion_hover_button:hover {
                background-color: var(--button-hover-bg-color) !important;

                color: var(--button-hover-color) !important;
              }
               #${id} .accordion_button.accordion_hover_button {
                background-color: var(--button-bg-color) !important;

                color: var(--button-color) !important;
              }`}
                    </style>

                    <div
                        className="accordion-section section-gap"
                        style={backgroundStyle}>
                        {(showHeadingText === WIDGET_CHECK_TRUE ||
                            showSubHeading === WIDGET_CHECK_TRUE) && (
                            <div className={`section-title ${headingPosition}`}>
                                <div className="container">
                                    {showHeadingText === WIDGET_CHECK_TRUE && (
                                        <h3
                                            style={{...headingStyle}}
                                            className={`${headingSize}`}
                                            dangerouslySetInnerHTML={{
                                                __html: ContentService.parseVariableValue(
                                                    componentData?.heading_et
                                                ),
                                            }}
                                        />
                                    )}

                                    <div className={subHeadingPosition}>
                                        {showSubHeading === WIDGET_CHECK_TRUE && (
                                            <p
                                                style={subHeadingStyle}
                                                dangerouslySetInnerHTML={{
                                                    __html: ContentService.parseVariableValue(
                                                        componentData?.sub_heading_et
                                                    ),
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="container">
                            <div className="accordion-inner">
                                <div className="accordion-list">
                                    {faqs_com &&
                                        faqs_com?.map((item: any, index: number) => {
                                            return (
                                                <Fragment key={index.toString()}>
                                                    {!!(
                                                        item?.faq_description_et?.length &&
                                                        item?.faq_title_et?.length
                                                    ) && (
                                                        <div key={item?.id} className="toggle-block">
                                                            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                                                            <h5
                                                                onClick={(e) => handleElement(e)}
                                                                className="accordion-title accordion-heading"
                                                                style={titleStyle}
                                                                dangerouslySetInnerHTML={{
                                                                    __html: ContentService.parseVariableValue(
                                                                        item?.faq_title_et
                                                                    ),
                                                                }}
                                                            />
                                                            <div
                                                                key={index.toString()}
                                                                className="accordion-description">
                                                                <p
                                                                    style={descriptionStyle}
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: ContentService.parseVariableValue(
                                                                            item?.faq_description_et
                                                                        ),
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                </Fragment>
                                            );
                                        })}
                                </div>
                            </div>

                            {showButton === WIDGET_CHECK_TRUE && faqs_button_com?.length && (
                                <div className="accordion-action text-center m-t-40">
                                    <ExpLinkParser
                                        style={linkParserStyle({
                                            buttonHoverColor,
                                            buttonTextHoverColor,
                                            buttonColor,
                                            buttonTextColor,
                                        })}
                                        className="button accordion_button accordion_hover_button"
                                        to={
                                            faqs_button_com?.length &&
                                            faqs_button_com[0]?.button_link_et
                                        }
                                        dangerouslySetInnerHTML={{
                                            __html: ContentService.parseVariableValue(
                                                faqs_button_com?.length &&
                                                faqs_button_com[0]?.button_text_et
                                            ),
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ExpAccordionBlock;
