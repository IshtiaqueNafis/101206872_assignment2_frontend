import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSingleEmployee} from "../../../redux/employeeSliceReducer";
import {Grid} from "semantic-ui-react";
import EmployeeHeader from "./EmployeeHeader";
import EmployeeDetailedInfo from "./EmployeeDetailedInfo";
import LoadingComponent from "../../../app/layout/LoadingComponent";


const EmployeeDetail = ({match}) => {

    const {selectedEmployee} = useSelector(state => state.employee);
    const {loading} = useSelector(state => state.async);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleEmployee({id: match.params.id}));
    }, [dispatch, match.params.id])

if(loading) return <LoadingComponent/>;

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
