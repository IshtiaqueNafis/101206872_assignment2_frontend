import React from 'react';
import {useSelector} from "react-redux";
import LogInForm from "../../auth/LogInForm";
import DeleteModal from "../../auth/DeleteModal";

const ModalManager = () => {
    const modalLookUP = {
        LogInForm,
        DeleteModal
    };

    const currentModal = useSelector(state => state.modal)
    let renderedModal;

    if (currentModal) {
        const {modalType, modalProps} = currentModal;
        const ModalComponent = modalLookUP[modalType];
        renderedModal = <ModalComponent {...modalProps}/>
    }


    return <span>{renderedModal}</span>
};

export default ModalManager;
