import React from 'react';
import {Button, Header, Image, Item, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";

const employeeImageStyle = {
    filter: 'brightness(30%)'
};

const employeeImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};
const EmployeeHeader = ({employee}) => {
    return (
        <Segment.Group>
            <Segment basic attached={'top'} style={{padding: '0'}}>
                <Image src={`/assets/background.jpg`}  fluid style={employeeImageStyle}/>

                <Segment basic style={employeeImageTextStyle}>
                    <Image src={`${employee.photo}`}  size="small"  avatar/>
                    <Item.Group>
                        <Item>

                            <Item.Content>
                                <Header
                                    size={'huge'}
                                    content={`${employee.first_name} ${employee.last_name}`}

                                    style={{color: 'white'}}
                                />

                                <p><b>Department Name:</b> {employee.department} </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment attached={"bottom"}>
                <Button as={Link} to={`/edit/${employee._id}`}>
                    Manage Employee
                </Button>
            </Segment>

        </Segment.Group>
    );
};

export default EmployeeHeader;

