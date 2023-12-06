// import Modal from 'react-modal';
import {IconCross} from '../../../assets/icons/cross';
import {ReactModal} from '../../../interfaces/common-component.interface';

/**
 * A modal component for displaying popup content.
 * @param modalData - The data for the modal content.
 * @param isOpenState - The state indicating whether the modal is open or closed.
 * @param isOpen - The flag indicating whether the modal is currently open.
 * @returns Rendered modal component.
 */
const ExpModal = (props: ReactModal) => {
    const {modalData, isOpenState, isOpen} = props;

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
        },
    };
    const closeModal = () => isOpenState(false);

    return (
        <div>
            {isOpen && (
                // // <Modal
                // //   isOpen={isOpen}
                // //   onRequestClose={closeModal}
                // //   style={customStyles}
                // //   contentLabel="Example Modal"
                // //   className={'modalpopup'}
                // //   ariaHideApp={false}>
                // //   <div onClick={closeModal} className="popup-close-link">
                // //     <i className="icon">
                // //       <IconCross />
                // //     </i>
                // //   </div>
                // //
                // //   {modalData ? (
                // //     <>
                // //       <div className="modal-header">
                // //         <h3
                // //           className="modal-header-title text-left"
                // //           dangerouslySetInnerHTML={{ __html: modalData?.heading }}
                // //         />
                // //       </div>
                // //       <div className="modal-content">
                // //         <div
                // //           dangerouslySetInnerHTML={{
                // //             __html: modalData?.description,
                // //           }}
                // //         />
                // //       </div>
                // //     </>
                //   ) : (
                //     ''
                //   )}
                // </Modal>
                <></>
            )}
        </div>
    );
};

export default ExpModal;
