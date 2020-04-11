import React, {Fragment} from 'react';
import {Container, Image, Menu, MenuItem, MenuMenu} from "semantic-ui-react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <Fragment>
            <Menu fixed={'top'}>
                <Container>
                    <MenuItem
                        as={NavLink}
                        exact
                        to={"/"}
                        header
                        className={'navLogoItem'}
                    >
                        <img
                            src="/assets/logo/logo_white.jpg"
                            alt="logo"
                            className={"navLogo"}
                        />
                    </MenuItem>

                    <MenuMenu position={'right'}>
                        <MenuItem as={NavLink} exact to={"/"} name={"Home"} className={"item"}/>
                        <MenuItem as={NavLink} exact to={"/about"} name={"About Us"} className={"item"}/>
                        <MenuItem as={NavLink} exact to={"/what-we-do"} name={"What We Do"} className={"item"}/>
                        <MenuItem as={NavLink} exact to={"/contact"} name={"Contact"} className={"item"}/>
                    </MenuMenu>

                </Container>

            </Menu>



        </Fragment>

    );
};

export default NavBar;