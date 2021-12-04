import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Header, Segment} from "semantic-ui-react";

import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import MyTextInput from "../../app/forms/FormComponents/MyTextInput";
import MySelectInput from "../../app/forms/FormComponents/MySelectInput";
import {departmentData, genderData} from "../../services/departmentData";
import {Link, Redirect} from "react-router-dom";
import {addEmployee, getSingleEmployee, updateEmployee} from "../../redux/employeeSliceReducer";
import LoadingComponent from "../../app/layout/LoadingComponent";

const EmployeeForm = ({match, history}) => {
    const {selectedEmployee} = useSelector(state => state.employee);
    const dispatch = useDispatch();
    const {loading, error} = useSelector(state => state.async);

    useEffect(() => {
        dispatch(getSingleEmployee({id: match.params.id}));
    }, [match.params.id]);


    if (loading || (!selectedEmployee && !error)) return <LoadingComponent/>
    if (error) return <Redirect to={'/error'}/>


    const initalValues = selectedEmployee ?? {
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        Phone: '',
        department: '',
        address: "",
        photo: "https://robohash.org/estiurerepellendus.png?size=300x400&set=set1"
    }
    const phoneRegex = RegExp(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    );
    const validationSchema = Yup.object({
        first_name: Yup.string().required(),
        last_name: Yup.string().required(),
        email: Yup.string().required().email(),
        gender: Yup.string().required(),
        Phone: Yup.string().matches(phoneRegex, "invalid phone").required(),
        department: Yup.string().required(),
        address: Yup.string().required(),
    })


    return (
        <Segment clearing>
            <Header content={selectedEmployee ? 'Edit Employee Information' : 'Create new Employee'}/>
            <Formik
                initialValues={initalValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    selectedEmployee ? dispatch(updateEmployee({...selectedEmployee, ...values})) : dispatch(addEmployee({...values}))
                    history.push('/employees')
                }
                }>

                {({isSubmitting, dirty, isValid}) => (
                    <Form className={'ui form'}>
                        <Header sub color={'orange'} content={'Employee Details'}/>
                        <MyTextInput name={'first_name'} placeholder={'First Name'}/>
                        <MyTextInput name={'last_name'} placeholder={'Last Name'}/>
                        <MySelectInput name={'gender'} placeholder={'Gender'} options={genderData}/>
                        <MyTextInput name={'email'} placeholder={'Email'}/>
                        <MyTextInput name={'address'} placeholder={'Addresses'}/>
                        <MyTextInput name={'Phone'} placeholder={'Phone'}/>
                        <MySelectInput name={'department'} placeholder={'Department Name'} options={departmentData}/>
                        <br/>
                        <Button
                            loading={isSubmitting}
                            disabled={!isValid || !dirty || isSubmitting}
                            type="submit"
                            floated={'right'}
                            positive
                            content={selectedEmployee ? 'Update Employee' : 'Add Employee'}
                        />
                        <Button
                            as={Link}
                            to={'/employees'}
                            type="submit"
                            floated={'right'}
                            content={'Cancel'}
                            disabled={isSubmitting}

                        />

                    </Form>
                )}


            </Formik>


        </Segment>
    );
};

export default EmployeeForm;