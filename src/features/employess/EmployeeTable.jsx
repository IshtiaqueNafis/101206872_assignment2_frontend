import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import MaterialTable from "@material-table/core";
import {columns} from "./employeeUtlis/employeeColumns";
import {Link} from "react-router-dom";
import {Icon} from "semantic-ui-react";
import {openModal} from "../../redux/modalSlice";

const EmployeeTable = () => {


    const {employees} = useSelector(state => state.employee);
    const dispatch = useDispatch();
    const {authenticated} = useSelector(state => state.auth);


    if (authenticated) return (
        <div>
            <MaterialTable
                className={'test'}
                columns={columns}
                data={employees}
                title={'Employee Table'}
                actions={[


                    rowData => {
                        return {
                            icon: () => <Link to={`/detail/${rowData._id}`}><Icon color={'green'}
                                                                                  name={'inbox'}/></Link>,
                            tooltip: 'Info',
                            onClick: rowData
                        };
                    },
                    rowData => {
                        return {
                            icon: () => <Link to={`/edit/${rowData._id}`}><Icon color={'purple'} name={'edit'}/></Link>,
                            tooltip: 'Edit',
                            onClick: rowData

                        };
                    },





                    () => {
                        return {
                            icon: () => <Icon color={'red'}
                                              name={'user delete'}/>,
                            tooltip: 'Delete',
                            onClick: (event, rowData) => dispatch(openModal({
                                modalType: 'DeleteModal',
                                modalProps: rowData._id
                            }))


                        }
                    }


                ]


                }
                options={{
                    actionsColumnIndex: -1
                }}

            />
        </div>
    )


    return (
        <div>
            <MaterialTable
                className={'test'}
                columns={columns}
                data={employees}
                title={'Employee Table'}
                actions={[


                        rowData => {
                            return {
                                icon: () => <Link to={`/detail/${rowData._id}`}><Icon color={'green'}
                                                                                      name={'inbox'}/></Link>,
                                tooltip: 'Info',
                                onClick: rowData
                            };
                        },


                ]


                }
                options={{
                    actionsColumnIndex: -1
                }}

            />
        </div>
    );
};

export default EmployeeTable;
