import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSingleEmployee} from "../../../redux/employeeSliceReducer";
import {Grid} from "semantic-ui-react";
import EmployeeHeader from "./EmployeeHeader";
import EmployeeDetailedInfo from "./EmployeeDetailedInfo";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import {Redirect} from "react-router-dom";


const EmployeeDetail = ({match}) => {

    const {selectedEmployee} = useSelector(state => state.employee);


    const {loading, error} = useSelector(state => state.async);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getSingleEmployee({id: match.params.id}));
    }, [dispatch, match.params.id])


    if (loading || (!selectedEmployee && !error)) return <LoadingComponent/>
    if (error) return <Redirect to={'/error'}/>


    return (

        <Grid>
            <Grid.Column>
                <EmployeeHeader employee={selectedEmployee}/>
                <EmployeeDetailedInfo employee={selectedEmployee}/>

            </Grid.Column>

        </Grid>
    );
};

export default EmployeeDetail;
