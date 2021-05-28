import React from "react";
import { Card, CardTitle, Col, Jumbotron, Row } from "reactstrap";
import { RouteComponentProps } from "react-router";
import QuotesTable from "components/QuotesTable";

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
            <>
                <Row className="mb-3">
                    <Col>
                        <Card body>
                            <CardTitle tag="h4">Quotes</CardTitle>

                            <QuotesTable />
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}
