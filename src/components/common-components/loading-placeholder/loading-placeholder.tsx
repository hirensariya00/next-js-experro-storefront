import { ExpLoadingPlaceholderProps } from '../../../interfaces/common-component.interface';

const ExpLoadingPlaceholder = (data: ExpLoadingPlaceholderProps) => {
  const { contentModel, isLoading, componentData, loaderClassName } = data;

  /* Record is not selected yet */
  if (!contentModel?.trim()?.length) {
    return (
      <div className="section-gap">
        <h3 className="text-center">Please select a record</h3>
      </div>
    );
    /* Loading Record */
  } else if (
    !!(contentModel?.trim()?.length && isLoading && !componentData?.id)
  ) {
    return (
      <div className={loaderClassName}>
        <div className="loading-section">
          <div className="loader-wrapper">
            <div className="loader-icon flex" />
          </div>
        </div>
      </div>
    );
    /* Record not found */
  } else if (
    !contentModel?.trim()?.length &&
    !isLoading &&
    !componentData?.id
  ) {
    return (
      <div className="section-gap">
        <h3>No data to view</h3>
      </div>
    );
  } else {
    /* Record loaded successfully */
    return <></>;
  }
};

export default ExpLoadingPlaceholder;
