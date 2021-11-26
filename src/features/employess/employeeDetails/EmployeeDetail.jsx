import React from 'react';
import {Grid} from "semantic-ui-react";
import {useSelector} from "react-redux";
import EmployeeHeader from "./EmployeeHeader";
import EmployeeDetailedInfo from "./EmployeeDetailedInfo";


const EmployeeDetail = ({match}) => {
    console.log(match.params.id);
    const employee = useSelector(state => state.employee.employees.find(e => e._id === match.params.id));

    return (
        <Grid>
            <Grid.Column>
                <EmployeeHeader employee={employee}/>
                <EmployeeDetailedInfo employee={employee}/>

            </Grid.Column>

        </Grid>
    );
};

export default EmployeeDetail;
