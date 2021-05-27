import React from "react";
import { Card, CardTitle } from "reactstrap";

interface IProps {

}

interface IState {

}

export default class PotentialRevenue extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
    }

    public render() {
        return (
            <Card body>
                <CardTitle tag="h4">Potential Revenue</CardTitle>
            </Card>
        );
    }
}
