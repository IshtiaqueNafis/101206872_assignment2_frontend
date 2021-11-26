import React from 'react';
import {useSelector} from "react-redux";
import LogInForm from "../../auth/LogInForm";

const ModalManager = () => {
    const modalLookUP = {
        LogInForm
    };

    const currentModal = useSelector(state => state.modal)
console.log(currentModal)
    let renderedModal;

    if (currentModal) {
        const {modalType, modalProps} = currentModal;
        const ModalComponent = modalLookUP[modalType];
        renderedModal = <ModalComponent {...modalProps}/>
    }


    return <span>{renderedModal}</span>
};

export default ModalManager;
