import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadData} from "../../redux/employeeSlice";
import MaterialTable from "@material-table/core";
import {columns} from "./employeeUtlis/employeeColumns";
import {Link} from "react-router-dom";
import {Icon} from "semantic-ui-react";

const EmployeeTable = () => {


    const employees = useSelector(state => state.employee.employees);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadData())
    }, [dispatch])


    return (
        <div>
            <MaterialTable
                className={'test'}
                columns={columns}
                data={employees}
                title={'Employee Table'}
                actions={[
                    rowData => ({
                        icon: () => <Link to={`/detail/${rowData._id}`}><Icon name={'edit'}/></Link>,
                        tooltip: 'Edit',
                        onClick: (rowData)
                    })
                ]}
                options={{
                    actionsColumnIndex: -1
                }}

            />
        </div>
    );
};

export default EmployeeTable;
