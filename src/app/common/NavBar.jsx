import React from 'react';
import {Button, Container, Menu} from "semantic-ui-react";
import {Link, NavLink} from "react-router-dom";



const NavBar = () => {


    return (
        <Menu inverted fixed={'top'}>
            <Container>
                <Menu.Item as={NavLink} exact to={'/'} header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}}/>
                    Employee Management
                </Menu.Item>
                <Menu.Item position={'right'}>
                    <Button as={Link} to={'/create'} content={'Create Employee'} basic inverted/>
                </Menu.Item>

            </Container>
        </Menu>
    );
};

export default NavBar;
