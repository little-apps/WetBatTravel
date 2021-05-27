import React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

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
                <NavbarBrand className="col-md-3 col-lg-2 mr-0 px-3">Wet Bat Travel</NavbarBrand>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"></input>
                <Nav className="px-3" navbar>
                    <NavItem className="text-nowrap">
                        <NavLink href="/components/">Sign Out</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
