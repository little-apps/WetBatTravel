import React from "react";
import { Card, CardTitle, Col, ListGroup, ListGroupItem, Media, Row } from "reactstrap";

interface IProps {

}

interface IState {

}

export default class NewLeads extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
    }

    public render() {
        return (
            <Card body>
                <CardTitle tag="h4">New Leads</CardTitle>

                <ListGroup>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <Media>
                                    <Media left middle className="mr-3">
                                        <Media object src="https://picsum.photos/id/1062/64/64" alt="Generic placeholder image" className="rounded-circle" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Jane Smith
                                        </Media>
                                        Hello!
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm={3} className="d-flex align-items-center justify-content-center">
                                <p className="font-weight-bold">13:40 PM</p>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <Media>
                                    <Media left middle className="mr-3">
                                        <Media object src="https://picsum.photos/id/1062/64/64" alt="Generic placeholder image" className="rounded-circle" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Jane Smith
                                        </Media>
                                        Hello!
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm={3} className="d-flex align-items-center justify-content-center">
                                <p className="font-weight-bold">13:40 PM</p>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <Media>
                                    <Media left middle className="mr-3">
                                        <Media object src="https://picsum.photos/id/1062/64/64" alt="Generic placeholder image" className="rounded-circle" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Jane Smith
                                        </Media>
                                        Hello!
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm={3} className="d-flex align-items-center justify-content-center">
                                <p className="font-weight-bold">13:40 PM</p>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <Media>
                                    <Media left middle className="mr-3">
                                        <Media object src="https://picsum.photos/id/1062/64/64" alt="Generic placeholder image" className="rounded-circle" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Jane Smith
                                        </Media>
                                        Hello!
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm={3} className="d-flex align-items-center justify-content-center">
                                <p className="font-weight-bold">13:40 PM</p>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        );
    }
}
