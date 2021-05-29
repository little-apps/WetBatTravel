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
            <>
                <Row className="mb-3">
                    <Col>
                        <Jumbotron>
                            <Row>
                                <Col sm={4}>
                                    <h1>Welcome to your dashboard!</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit suscipit libero, eu facilisis velit. Nulla sapien nisi, faucibus ac ornare ut, convallis ac arcu. Suspendisse sodales vitae justo nec ullamcorper. Duis ultrices cursus urna, varius tempor elit maximus id. Quisque sagittis laoreet metus a faucibus. Donec dapibus nunc eu tellus viverra, vitae lobortis mauris cursus. In hac habitasse platea dictumst.</p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </Col>
                                <Col>
                                    <Row style={{ maxHeight: '90%' }}>
                                        <Col>
                                            <img src="https://picsum.photos/1100/230" className="img-fluid" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4} className="text-center">
                                            <h2>101 New Leads</h2>
                                        </Col>
                                        <Col sm={4} className="text-center">
                                            <h2>45 Quotes Created</h2>
                                        </Col>
                                        <Col sm={4} className="text-center">
                                            <h2>40 Quotes Pending</h2>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Jumbotron>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={4}>
                        <QuickQuote {...this.props} />
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
            </>
        );
    }
}
