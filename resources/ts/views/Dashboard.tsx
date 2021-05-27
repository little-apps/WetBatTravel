import React from "react";
import { Col, Jumbotron, Row } from "reactstrap";
import { RouteComponentProps } from "react-router";
import QuickQuote from "components/dashboard/QuickQuote";
import PendingQuotes from "components/dashboard/PendingQuotes";
import NewLeads from "components/dashboard/NewLeads";
import PopularDestinations from "components/dashboard/PopularDestinations";
import TeamChat from '../components/dashboard/TeamChat';
import Revenue from "components/dashboard/Revenue";
import PotentialRevenue from "components/dashboard/PotentialRevenue";
import CloseRatios from "components/dashboard/CloseRatios";

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
            <div>
                <Row className="mb-3">
                    <Col>
                        <Jumbotron>
                            <h1>Welcome to your dashboard!</h1>
                            <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                            <p><a className="btn btn-primary" role="button">Learn more</a></p>
                        </Jumbotron>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={4}>
                        <QuickQuote />
                    </Col>
                    <Col sm={4}>
                        <PendingQuotes />
                    </Col>
                    <Col sm={4}>
                        <NewLeads />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={8}>
                        <PopularDestinations />
                    </Col>
                    <Col sm={4}>
                        <TeamChat />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={4}>
                        <Revenue />
                    </Col>
                    <Col sm={4}>
                        <PotentialRevenue />
                    </Col>
                    <Col sm={4}>
                        <CloseRatios />
                    </Col>
                </Row>
            </div>
        );
    }
}
