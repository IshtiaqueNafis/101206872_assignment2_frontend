import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import ModalWrapper from "../common/modal/ModalWrapper";
import {Button, Modal} from "semantic-ui-react";
import {deleteEmployee} from "../../redux/employeeSlice";
import {closeModal} from "../../redux/modalSlice";

const DeleteModal = () => {
    const dispatch = useDispatch();
    const {modalProps} = useSelector(state => state.modal);
    console.log(modalProps);

    return (
        <ModalWrapper size={'mini'} header={'Are you sure you want to delete this.'}>
            <Modal.Content>
                <p>Are you sure you want to delete this Employee</p>
            </Modal.Content>
            <Modal.Actions>
                <Button content={'Yes'} positive onClick={() => {
                    dispatch(deleteEmployee(modalProps))
                    dispatch(closeModal());
                }}/>

                <Button content={'No'} negative onClick={() => {
                    dispatch(closeModal());
                }}/>
            </Modal.Actions>

        </ModalWrapper>
    );
};

export default DeleteModal;
