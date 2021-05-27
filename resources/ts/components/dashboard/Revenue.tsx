import React from "react";
import { Card, CardTitle } from "reactstrap";

interface IProps {

}

interface IState {

}

export default class Revenue extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
    }

    public render() {
        return (
            <Card body>
                <CardTitle tag="h4">Revenue</CardTitle>
            </Card>
        );
    }
}
