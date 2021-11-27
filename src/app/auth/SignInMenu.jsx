import React from 'react';
import {Dropdown, Image, Menu} from "semantic-ui-react";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signOutUser} from "../../redux/authSliceReducer";

const SignInMenu = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {currentUser} = useSelector(state => state.auth);

    return (

        <Menu.Item position="right">
            <Image avatar spaced={'right'} src={'/assets/user.png'}></Image>
            <Dropdown pointing={'top left'} text={currentUser.email}>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => {
                        dispatch(signOutUser())
                        history.push('/employees');
                    }} text="Sign Out" icon={'power'}/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>

    );
};

export default SignInMenu;
