import React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink, Form, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import FA from 'react-fontawesome';

import logo from "assets/images/logo-light.png";

interface IProps {

}

interface IState {

}

export default class AdminNavbar extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
    }

    public render() {
        return (
            <Navbar dark sticky="top" className="bg-dark flex-md-nowrap p-0 shadow">
                <NavbarBrand className="col-md-3 col-lg-2 mr-0 px-3">
                    <img src={logo} alt="Wet Bat Travel" />
                </NavbarBrand>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Form inline className="ml-auto">
                    <InputGroup className="mr-sm-2">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText className="bg-white">
                                <FA name="search" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input type="search" placeholder="Search" aria-label="Search" />
                    </InputGroup>
                </Form>
                <Nav className="px-3" navbar>
                    <NavItem className="text-nowrap mx-2">
                        <NavLink href="#">
                            <FA name="bell" />
                        </NavLink>
                    </NavItem>
                    <NavItem className="text-nowrap mx-2">
                        <NavLink href="#">
                            <FA name="envelope" />
                        </NavLink>
                    </NavItem>
                    <NavItem className="text-nowrap mx-2">
                        <NavLink href="#">
                            <FA name="cog" />
                        </NavLink>
                    </NavItem>
                    <NavItem className="text-nowrap mx-2">
                        <NavLink href="#">
                            <img src="https://picsum.photos/id/1084/32/32" alt="Generic placeholder image" className="rounded-circle" />
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
