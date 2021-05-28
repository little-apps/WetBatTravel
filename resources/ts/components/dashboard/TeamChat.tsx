import React from "react";
import FontAwesome from "react-fontawesome";
import { Button, Card, CardTitle, Col, ListGroup, ListGroupItem, Media, Row } from "reactstrap";

interface IProps {

}

interface IState {

}

export default class TeamChat extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
    }

    public render() {
        return (
            <Card body>
                <CardTitle tag="h4">
                    <FontAwesome name="comment-o" />{' '}
                    Team Chat
                </CardTitle>

                <ListGroup>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <Media className="align-items-center">
                                    <Media left className="mr-3">
                                        <Media object src="https://picsum.photos/id/1062/64/64" alt="Generic placeholder image" className="rounded-circle" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Josh Joshson
                                        </Media>
                                        <p className="mb-0">How is it going?</p>
                                        <p><small>May 28, 2021 2:00PM</small></p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm={3} className="d-flex align-items-center justify-content-center">
                                <Button color="secondary">
                                    <FontAwesome name="envelope-open" />
                                </Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <Media className="align-items-center">
                                    <Media left className="mr-3">
                                        <Media object src="https://picsum.photos/id/1062/64/64" alt="Generic placeholder image" className="rounded-circle" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Josh Joshson
                                        </Media>
                                        <p className="mb-0">How is it going?</p>
                                        <p><small>May 28, 2021 2:00PM</small></p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm={3} className="d-flex align-items-center justify-content-center">
                                <Button color="secondary">
                                    <FontAwesome name="envelope-open" />
                                </Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <Media className="align-items-center">
                                    <Media left className="mr-3">
                                        <Media object src="https://picsum.photos/id/1062/64/64" alt="Generic placeholder image" className="rounded-circle" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Josh Joshson
                                        </Media>
                                        <p className="mb-0">How is it going?</p>
                                        <p><small>May 28, 2021 2:00PM</small></p>
                                    </Media>
                                </Media>
                            </Col>
                            <Col sm={3} className="d-flex align-items-center justify-content-center">
                                <Button color="secondary">
                                    <FontAwesome name="envelope-open" />
                                </Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        );
    }
}
