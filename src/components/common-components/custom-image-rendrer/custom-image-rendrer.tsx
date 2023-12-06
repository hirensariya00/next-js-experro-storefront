import {ExpImageParser} from '../../../cms-utils/image-parser';
import {model_internal_name, expDataSourceConstants} from '../../../cms-utils';

export interface CustomImageRendererProps {
    imageData?: any;
    dataSource?: string;
    contentLibraryImageData?: string;
    staticWidthArr: any[];
    height: string | number | undefined;
    width: string | number | undefined;
    loading?: string;
    alt?: string;
    title?: string;
    lazyLoad?: boolean;
}

/**
 * Renders a custom image based on the provided props and data source. Works for both FREE_FROM and CONTENT_LIBRARY
 * @param imageData - The image data object used for rendering the image.
 * @param dataSource - The data source of the image.
 * @param contentLibraryImageData - The image data for the content library.
 * @param staticWidthArr - An array of static widths for the image.
 * @param height - The height of the image.
 * @param width - The width of the image.
 * @param alt - The alt text for the image.
 * @param title - The title of the image.
 * @param lazyLoad - The flag to load the image lazyly
 * @returns Rendered custom image component.
 */
const ExpCustomImageRenderer = (props: CustomImageRendererProps) => {
    const {
        imageData = {},
        dataSource = 'contentLibrary',
        contentLibraryImageData = '',
        staticWidthArr = [],
        height,
        width,
        alt = 'Excore',
        title = 'Excore',
        lazyLoad = false,
    } = props;

    let imageObj: any = {};
    const {CONTENT_LIBRARY, FREE_FORM} = expDataSourceConstants;
    const imageWidthSizeResolution: string[] = ['1280px', '768px', '300px'];

    const viewTypeArr = ['desktop', 'tablet', 'mobile'];

    const handleFreeFormImageData = () => {
        viewTypeArr.forEach((view: string) => {
            if (imageData[view]?.mediaManagerUrl?.length) {
                if (
                    !imageData[view]?.mediaManagerUrl?.includes(
                        model_internal_name.image_url_prefix
                    )
                ) {
                    const image = ExpImageParser(imageData[view]?.mediaManagerUrl);
                    imageData[view]['mediaManagerUrl'] = image?.imageUrl;
                    imageData[view]['altText'] = image?.altText;
                    imageData[view]['caption'] = image?.caption;
                }
            }
        });
    };

    if (dataSource === CONTENT_LIBRARY || contentLibraryImageData?.length) {
        imageObj = ExpImageParser(contentLibraryImageData);
    } else if (dataSource === FREE_FORM && Object.keys(imageData)?.length) {
        handleFreeFormImageData();
    }

    const getImageSrcSet = (image_url: string, width: number) => {
        let final_set = '';

        final_set =
            `${image_url}?width=${Math.round(width)} 1x` +
            ', ' +
            `${image_url}?width=${width * 2} 2x`;
        return final_set;
    };

    return (
        <picture>
            {dataSource === CONTENT_LIBRARY && imageObj?.imageUrl ? (
                staticWidthArr?.length ? (
                    staticWidthArr.map(
                        (staticWidth: string, staticWidth_index: number) => (
                            <source
                                key={staticWidth_index.toString()}
                                media={`(min-width: ${imageWidthSizeResolution[staticWidth_index]})`}
                                srcSet={getImageSrcSet(
                                    imageObj?.imageUrl,
                                    parseInt(staticWidth)
                                )}
                            />
                        )
                    )
                ) : (
                    <></>
                )
            ) : dataSource === FREE_FORM ? (
                <>
                    {imageData?.desktop?.mediaManagerUrl ? (
                        <>
                            <source
                                media="(min-width:1280px)"
                                srcSet={getImageSrcSet(
                                    imageData?.desktop?.mediaManagerUrl,
                                    parseInt(
                                        imageData?.desktop?.width?.length
                                            ? imageData?.desktop?.width?.replaceAll(' ', '')
                                            : width
                                    )
                                )}
                            />
                        </>
                    ) : imageData?.desktop?.imageUrl ? (
                        <>
                            <source
                                media="(min-width:1280px)"
                                srcSet={`${imageData?.desktop?.imageUrl}`}
                            />
                        </>
                    ) : (
                        <source
                            media="(min-width:1280px)"
                            srcSet={`https://via.placeholder.com/${width}x${height}.png?text=Image+comming+soon`}
                        />
                    )}
                    {imageData?.tablet?.mediaManagerUrl ? (
                        <source
                            media="(min-width:768px)"
                            srcSet={getImageSrcSet(
                                imageData?.tablet?.mediaManagerUrl,
                                parseInt(
                                    imageData?.tablet?.width?.length
                                        ? imageData?.tablet?.width?.replaceAll(' ', '')
                                        : width
                                )
                            )}
                        />
                    ) : (
                        <>
                            <source
                                media="(min-width:768px)"
                                srcSet={`${imageData?.tablet?.imageUrl}`}
                            />
                        </>
                    )}
                    {imageData?.mobile?.mediaManagerUrl ? (
                        <source
                            media="(min-width:320px)"
                            srcSet={getImageSrcSet(
                                imageData?.mobile?.mediaManagerUrl,
                                parseInt(
                                    imageData?.mobile?.width?.length
                                        ? imageData?.mobile?.width?.replaceAll(' ', '')
                                        : width
                                )
                            )}
                        />
                    ) : (
                        <>
                            <source
                                media="(min-width:320px)"
                                srcSet={`${imageData?.mobile?.imageUrl}`}
                            />
                        </>
                    )}
                </>
            ) : (
                ''
            )}
            {dataSource === CONTENT_LIBRARY ? (
                <>
                    {lazyLoad ? (
                        <img
                            loading="lazy"
                            src={imageObj?.imageUrl}
                            alt={imageObj?.altText ? imageObj?.altText : alt}
                            title={imageObj?.caption ? imageObj?.caption : title}
                            height={height}
                            width={width}
                        />
                    ) : (
                        <img
                            src={imageObj?.imageUrl}
                            alt={imageObj?.altText ? imageObj?.altText : alt}
                            title={imageObj?.caption ? imageObj?.caption : title}
                            height={height}
                            width={width}
                        />
                    )}
                </>
            ) : imageData?.desktop?.mediaManagerUrl ? (
                <>
                    {lazyLoad ? (
                        <img
                            loading="lazy"
                            src={imageData?.desktop?.mediaManagerUrl}
                            alt={
                                imageData?.desktop?.altText
                                    ? imageData?.desktop?.altText
                                    : alt?.length
                                        ? alt
                                        : ''
                            }
                            title={
                                imageData?.desktop?.caption
                                    ? imageData?.desktop?.caption
                                    : title?.length
                                        ? title
                                        : ''
                            }
                            height={height}
                            width={width}
                        />
                    ) : (
                        <img
                            src={imageData?.desktop?.mediaManagerUrl}
                            alt={
                                imageData?.desktop?.altText
                                    ? imageData?.desktop?.altText
                                    : alt?.length
                                        ? alt
                                        : ''
                            }
                            title={
                                imageData?.desktop?.caption
                                    ? imageData?.desktop?.caption
                                    : title?.length
                                        ? title
                                        : ''
                            }
                            height={height}
                            width={width}
                        />
                    )}
                </>
            ) : imageData?.desktop?.imageUrl ? (
                <>
                    {lazyLoad ? (
                        <img
                            loading="lazy"
                            src={`${imageData?.desktop?.imageUrl}`}
                            alt={imageObj?.altText ? imageObj?.altText : alt}
                            title={imageObj?.caption ? imageObj?.caption : title}
                            height={height}
                            width={width}
                        />
                    ) : (
                        <img
                            src={`${imageData?.desktop?.imageUrl}`}
                            alt={imageObj?.altText ? imageObj?.altText : alt}
                            title={imageObj?.caption ? imageObj?.caption : title}
                            height={height}
                            width={width}
                        />
                    )}
                </>
            ) : (
                <>
                    {lazyLoad ? (
                        <img
                            loading="lazy"
                            src={`https://via.placeholder.com/${width}x${height}.png?text=Image+comming+soon`}
                            alt={imageObj?.altText ? imageObj?.altText : alt}
                            title={imageObj?.caption ? imageObj?.caption : title}
                            height={height}
                            width={width}
                        />
                    ) : (
                        <img
                            src={`https://via.placeholder.com/${width}x${height}.png?text=Image+comming+soon`}
                            alt={imageObj?.altText ? imageObj?.altText : alt}
                            title={imageObj?.caption ? imageObj?.caption : title}
                            height={height}
                            width={width}
                        />
                    )}
                </>
            )}
        </picture>
    );
};

export default ExpCustomImageRenderer;
