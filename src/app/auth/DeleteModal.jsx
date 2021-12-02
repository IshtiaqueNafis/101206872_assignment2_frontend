import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import ModalWrapper from "../common/modal/ModalWrapper";
import {Button, Modal} from "semantic-ui-react";

import {closeModal} from "../../redux/modalSlice";
import {toast} from "react-toastify";
import {deletingEmployee} from "../../redux/employeeSliceReducer";
import {useHistory} from "react-router-dom";

const DeleteModal = () => {
    const dispatch = useDispatch();
    const {modalProps} = useSelector(state => state.modal);
    const history = useHistory();


    return (
        <ModalWrapper size={'mini'} header={'Are you sure you want to delete this.'}>
            <Modal.Content>
                <p>Are you sure you want to delete this Employee</p>
            </Modal.Content>
            <Modal.Actions>
                <Button content={'Yes'} positive onClick={async () => {
                    try {
                        await dispatch((deletingEmployee({modalProps})))
                        history.push('/employees');
                        dispatch(closeModal());
                        toast.success('user deleted successfully');



                    } catch (e) {
                        toast.error('Something went wrong');
                        dispatch(closeModal());

                    }


                }}/>

                <Button content={'No'} negative onClick={() => {
                    dispatch(closeModal());
                }}/>
            </Modal.Actions>

        </ModalWrapper>
    );
};

export default DeleteModal;
