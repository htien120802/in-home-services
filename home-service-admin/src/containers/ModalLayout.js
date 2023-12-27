import { useEffect } from 'react'
import { MODAL_BODY_TYPES } from '../utils/globalConstantUtil'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../features/common/modalSlice'
import AddLeadModalBody from '../features/leads/components/AddLeadModalBody'
import ConfirmationModalBody from '../features/common/components/ConfirmationModalBody'
import AddCategoryModalBody from 'features/common/components/AddCategoryModalBody'
import AddProductModalBody  from 'features/common/components/AddProductModalBody'
import UpdateProductModalBody  from 'features/common/components/UpdateProductModalBody'
import UpdateCustomerModalBody from 'features/common/components/UpdateCustomerModalBody'
import UpdateProviderModalBody from 'features/common/components/UpdateProviderModalBody'
import AddCustomerModalBody from 'features/common/components/AddCustomerModalBody'
import AddProviderModalBody from 'features/common/components/AddProviderModalBody'
import UpdateCategoryModalBody from 'features/common/components/UpdateCategoryModalBody'
import ProviderStatisticsModalBody from 'features/common/components/ProviderStatisticsModalBody'

function ModalLayout(){


    const {isOpen, bodyType, size, extraObject, title} = useSelector(state => state.modal)
    const dispatch = useDispatch()

    const close = (e) => {
        dispatch(closeModal(e))
    }



    return(
        <>
        {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <div className={`modal ${isOpen ? "modal-open" : ""}`}>
            <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}>
                <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => close()}>✕</button>
                <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>


                {/* Loading modal body according to different modal type */}
                {
                    {
                             [MODAL_BODY_TYPES.LEAD_ADD_NEW] : <AddLeadModalBody closeModal={close} extraObject={extraObject}/>,
                             [MODAL_BODY_TYPES.CONFIRMATION] : <ConfirmationModalBody extraObject={extraObject} closeModal={close}/>,
                             [MODAL_BODY_TYPES.ADD_CATEGORY]: <AddCategoryModalBody extraObject={extraObject} closeModal={close} />,
                            [MODAL_BODY_TYPES.ADD_PRODUCT]: <AddProductModalBody extraObject={extraObject} closeModal={close} />,
                            [MODAL_BODY_TYPES.UPDATE_PRODUCT]: <UpdateProductModalBody extraObject={extraObject} closeModal={close} />,
                            [MODAL_BODY_TYPES.UPDATE_CUSTOMER]: <UpdateCustomerModalBody extraObject={extraObject} closeModal={close} />,
                            [MODAL_BODY_TYPES.UPDATE_PROVIDER]: <UpdateProviderModalBody extraObject={extraObject} closeModal={close} />,
                            [MODAL_BODY_TYPES.ADD_PROVIDER]: <AddProviderModalBody extraObject={extraObject} closeModal={close} />,
                            [MODAL_BODY_TYPES.ADD_CUSTOMER]: <AddCustomerModalBody extraObject={extraObject} closeModal={close} />,
                            [MODAL_BODY_TYPES.UPDATE_CATEGORY]: <UpdateCategoryModalBody extraObject={extraObject} closeModal={close} />,
                            [MODAL_BODY_TYPES.PROVIDER_STATISTICS]: <ProviderStatisticsModalBody extraObject={extraObject} closeModal={close} />,
                             [MODAL_BODY_TYPES.DEFAULT] : <div></div>
                    }[bodyType]
                }
            </div>
            </div>
            </>
    )
}

export default ModalLayout