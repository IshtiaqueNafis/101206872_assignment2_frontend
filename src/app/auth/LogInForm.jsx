import React from 'react';
import {useDispatch} from "react-redux";
import ModalWrapper from "../common/modal/ModalWrapper";
import {Form, Formik} from 'formik';
import * as Yup from 'yup'
import {Button} from "semantic-ui-react";
import {closeModal} from "../../redux/modalSlice";
import MyTextInput from "../forms/FormComponents/MyTextInput";
import {signInUser} from "../../redux/authSliceReducer";


const LogInForm = () => {
    const dispatch = useDispatch();
    return (
        <ModalWrapper size={'mini'} header={'SIGN IN'}>
            <Formik
                initialValues={{email: '', password: ''}}

                validationSchema={Yup.object({
                    email: Yup.string().required().email(),
                    password: Yup.string().required()
                })}
                onSubmit={(values,{setSubmitting}) => {
                    dispatch(signInUser(values));
                    setSubmitting(false);
                    dispatch(closeModal());
                }}
            >
                {({isSubmitting, isValid, dirty})=>(
                    <Form className={'ui form'}>
                        <MyTextInput name="email" placeholder={'Email Addresses'}/>
                        <MyTextInput name="password" placeholder={'password'} type={'password'}/>
                        <Button
                            loading={isSubmitting} // sit will load when the form is being submitted.
                            disabled={!isValid || !dirty || isSubmitting}
                            type={'submit'}
                            fluid
                            size={'large'}
                            color={'teal'}
                            content={'Login'}/>
                    </Form>
                )}

            </Formik>

        </ModalWrapper>
    );
};

export default LogInForm;
