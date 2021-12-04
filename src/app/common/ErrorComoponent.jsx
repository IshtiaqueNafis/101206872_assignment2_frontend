import React from 'react';
import {Link} from "react-router-dom";
import {Button, Header, Segment} from "semantic-ui-react";
import {useSelector} from "react-redux";

const ErrorComponent = () => {
    const {error} = useSelector(state => state.async);


    return (
        <Segment placeholder>
            <Header textAlign={'center'} content={error?.message || 'Oops we have an error'}/>
            <Button as={Link} to={'/employees'} primary style={{marginTop: 20}} content={'Return to Employee'}></Button>

        </Segment>
    );
};

export default ErrorComponent;
