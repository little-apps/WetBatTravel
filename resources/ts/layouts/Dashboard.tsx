import React from "react";
import { RouteComponentProps } from "react-router";

interface IProps extends RouteComponentProps {

}

interface IState {

}

export default class Dashboard extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
    }

    public render() {
        return (
            <div />
        );
    }
}
