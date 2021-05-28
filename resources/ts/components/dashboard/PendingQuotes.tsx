import QuotesTable from "components/shared/QuotesTable";
import React from "react";
import FontAwesome from "react-fontawesome";
import { Card, CardTitle, Table } from "reactstrap";

interface IProps {

}

interface IState {

}

export default class PendingQuotes extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
    }

    public render() {
        return (
            <Card body>
                <CardTitle tag="h4">
                    <FontAwesome name="clock-o" />{' '}
                    Pending Quotes
                </CardTitle>

                <QuotesTable items={5} />
            </Card>
        );
    }
}
