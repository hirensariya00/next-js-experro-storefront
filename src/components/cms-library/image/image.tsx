import { ExpCustomImageRenderer } from '../../common-components/custom-image-rendrer';

export interface ExpImageProps {
  image_properties: string;
}

/**
 * Renders an Image component.
 * @param props - The Image component props.
 * @returns The rendered Image component.
 */
const ExpImage = (props: ExpImageProps) => {
  const { image_properties } = props;

  const staticWidthArr: string[] = [];

  return (
    <div>
      <ExpCustomImageRenderer
        dataSource={'freeForm'}
        staticWidthArr={staticWidthArr}
        imageData={JSON.parse(image_properties)?.imageData}
        contentLibraryImageData={''}
        height="100"
        width="160"
        loading="lazy"
      />
    </div>
  );
};

export default ExpImage;
