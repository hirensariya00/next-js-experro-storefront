'use client'
import InnerHTML from 'dangerously-set-html-content';
import {CommonUtilities} from '../../../utilities';

/**
 * Renders a HTML Render component.
 * @param props - The HTML Render component props.
 * @returns Rendered HTML Render component.
 */
const ExpHtmlRenderer = ({htmlInput}: any) => {
    const IsCMSApp = true
    let html_input;

    try {
        html_input = CommonUtilities.b64_to_utf8(htmlInput);
    } catch (err) {
        html_input = htmlInput;
    }

    if (IsCMSApp) {
        return <InnerHTML html={html_input}/>;
    } else {
        return <div dangerouslySetInnerHTML={{__html: html_input}}/>;
    }
};

export default ExpHtmlRenderer;
