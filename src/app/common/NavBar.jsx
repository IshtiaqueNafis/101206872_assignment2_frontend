import React from 'react';
import {Button, Container, Menu} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {openModal} from "../../redux/modalSlice";


const NavBar = () => {
    const dispatch = useDispatch();
    return (
        <Menu inverted fixed={'top'}>
            <Container>
                <Menu.Item as={NavLink} exact to={'/'} header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}}/>
                    Employee Management
                </Menu.Item>

                <Menu.Item>
                    <Button onClick={()=>dispatch(openModal({modalType:'LogInForm'}))} content={'Log In'}/>

                </Menu.Item>


            </Container>
        </Menu>
    );
};

export default NavBar;
