import React from 'react';
import {Button, Container, Header, Icon, Image, Segment} from "semantic-ui-react";

const HomePage = ({history}) => {
    return (
        <div>
            <Segment inverted textAlign="center" vertical className="masthead">
                <Container>
                    <Header as={'h1'} inverted>
                        <Image size={"massive"} src={'/assets/logo.png'} style={{marginBottom: 12}}/>
                        Employee Management
                    </Header>
                    <Button onClick={() => history.push('/employees')} size={'huge'} inverted>
                        Get Started
                        <Icon name="right arrow" inverted/>
                    </Button>
                </Container>

            </Segment>
        </div>
    );
};

export default HomePage;
