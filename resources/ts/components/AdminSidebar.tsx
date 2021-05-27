import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

interface IProps extends RouteComponentProps {

}

interface IState {

}

export default class AdminSidebar extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
    }

    public render() {
        const { location } = this.props;

        return (
            <div className="flex-column d-md-block bg-light sidebar collapse">
                <div className="sidebar-sticky pt-3">
                    <Nav className="flex-column">
                        <NavItem>
                            <NavLink href="/dashboard" active={location.pathname === "/dashboard"}>Dashboard</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
        );
    }
}
