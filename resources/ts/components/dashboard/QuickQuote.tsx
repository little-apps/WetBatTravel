import Airports, { IAirport } from "api/Airports";
import React from "react";
import { Button, Card, CardTitle, Col, Form, Input, Label, Row } from "reactstrap";

interface IProps {

}

interface IState {
    airports: IAirport[];
}

export default class QuickQuote extends React.Component<IProps, IState> {
    private readonly airportsApi: Airports;

    constructor(props: Readonly<IProps>) {
        super(props);

        this.airportsApi = new Airports();

        this.state = {
            airports: []
        };

        this.populateAirports = this.populateAirports.bind(this);
    }

    public componentDidMount() {
        this.populateAirports();
    }

    public async populateAirports() {
        const airports = await this.airportsApi.all();

        this.setState({ airports: airports.data });
    }

    public render() {
        const { airports } = this.state;

        return (
            <Card body>
                <CardTitle tag="h4">Quick Quote</CardTitle>

                <Form>
                    <Row form className="mb-2">
                        <Col>
                            <Label for="from" hidden>Departure Airport</Label>
                            <Input type="select" name="from" id="from" bsSize="lg">
                                <option value="" disabled selected>Departure Airport</option>
                                {airports.map((airport, key) => (
                                    <option key={key} value={airport.code}>{airport.airport}</option>
                                ))}
                            </Input>
                        </Col>
                        <Col>
                            <Label for="from" hidden>Destination Airport</Label>
                            <Input type="select" name="from" id="from" bsSize="lg">
                                <option value="" disabled selected>Destination Airport</option>
                                {airports.map((airport, key) => (
                                    <option key={key} value={airport.code}>{airport.airport}</option>
                                ))}
                            </Input>
                        </Col>
                    </Row>
                    <Row form className="mb-2">
                        <Col>
                            <Label for="start" hidden>Start Date</Label>
                            <Input type="date" name="start" id="start" bsSize="lg" />
                        </Col>
                        <Col>
                            <Label for="end" hidden>End Date</Label>
                            <Input type="date" name="end" id="end" bsSize="lg" />
                        </Col>
                    </Row>
                    <Row form className="mb-2">
                        <Col>
                            <Label for="people" hidden># of People</Label>
                            <Input type="number" name="people" id="people" bsSize="lg" min="1" max="100" placeholder="# of People" />
                        </Col>
                        <Col>
                            <Label for="transportation" hidden>Transportation</Label>
                            <Input type="select" name="transportation" id="transportation" bsSize="lg">
                                <option value="" disabled selected>Transportation</option>
                                <option>Heinz (Car)</option>
                            </Input>
                        </Col>
                    </Row>
                    <Row form className="mb-2">
                        <Col>
                            <Label for="name" hidden>Contact Name</Label>
                            <Input type="text" name="name" id="name" bsSize="lg" placeholder="Contact Name" />
                        </Col>
                        <Col>
                            <Button color="primary" type="submit" size="lg" block>Create Quote</Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        );
    }
}
