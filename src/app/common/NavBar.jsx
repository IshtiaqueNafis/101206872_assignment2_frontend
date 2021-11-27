import React from 'react';
import {Container, Menu} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import SignInMenu from "../auth/SignInMenu";
import SignOutMenu from "../auth/SignOutMenu";


const NavBar = () => {
    const {authenticated} = useSelector(state => state.auth);




    return (
        <Menu inverted fixed={'top'}>
            <Container>
                <Menu.Item as={NavLink} exact to={'/'} header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}}/>
                    Employee Management
                </Menu.Item>
                {authenticated? <SignInMenu/>:<SignOutMenu/>   }

            </Container>
        </Menu>
    );
};

export default NavBar;
