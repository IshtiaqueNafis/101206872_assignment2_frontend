import React from 'react';
import {Button, Menu} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {openModal} from "../../redux/modalSlice";


const SignOutMenu = () => {

    const dispatch = useDispatch();

    //region ** props explained***
    /*
    setAuthenticated(boolean) --> signs in sign out user
     */
    // endregion
    return (

        <Menu.Item position="right">
            <Button onClick={() => dispatch(openModal({modalType: 'LogInForm'}))} basic inverted content={'Login'}/>
        </Menu.Item>

    );
};

export default SignOutMenu;
