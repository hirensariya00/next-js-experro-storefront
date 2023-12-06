import { CSSProperties } from 'react';
import { ContentService } from '../../../services';

export interface ExpTextProps {
  textColor?: string;
  textPosition?: string;
  text?: string;
}

/**
 * Renders a ExpText component.
 * @param props - The ExpText component props.
 * @returns The rendered ExpText component.
 */
const ExpText = (props: ExpTextProps) => {
  const { textColor, textPosition, text } = props;

  const textToPrint = ContentService.parseVariableValue(text);
  const titleTextStyle: CSSProperties = {
    color: typeof textColor === 'string' ? JSON.parse(textColor).value : '#000',
  };

  return (
    <div className={`text-widget-section ${textPosition}`}>
      <div className="container">
        <p
          style={titleTextStyle}
          dangerouslySetInnerHTML={{ __html: textToPrint }}
        />
      </div>
    </div>
  );
};

export default ExpText;
