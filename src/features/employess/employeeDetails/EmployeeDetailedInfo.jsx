import React from 'react';
import {Grid, Icon, Segment} from "semantic-ui-react";

const EmployeeDetailedInfo = ({employee}) => {
    ////phone
    return (
        <Segment.Group>
            <Segment attached="top">
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size="large" color="teal" name="mail"/>
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{employee.email}</p>
                    </Grid.Column>
                </Grid>
            </Segment>

            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon name="marker" size="large" color="teal"/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{employee.address}</span>
                    </Grid.Column>
                </Grid>
            </Segment>


            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon name="phone" size="large" color="teal"/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{employee.Phone}</span>
                    </Grid.Column>
                </Grid>
            </Segment>

            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon name="user" size="large" color="teal"/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{employee.gender}</span>
                    </Grid.Column>
                </Grid>
            </Segment>


        </Segment.Group>
    );
};

export default EmployeeDetailedInfo;
