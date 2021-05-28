import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Nav, NavItem, NavLink } from "reactstrap";
import { SidebarLinks } from 'Options';

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
                        {SidebarLinks.map((link, key) => (
                            <NavItem key={key}>
                                <NavLink href={link.link} active={location.pathname === link.link}>
                                    {link.icon !== undefined && link.icon}
                                    {link.icon !== undefined && ' '}
                                    {link.text}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                </div>
            </div>
        );
    }
}
