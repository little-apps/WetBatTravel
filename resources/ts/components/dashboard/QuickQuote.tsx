import Airports, { IAirport } from "api/Airports";
import React, { FormEvent } from "react";
import { Button, Card, CardTitle, Col, Form, Input, Label, Row } from "reactstrap";
import SweetAlert from 'react-bootstrap-sweetalert';

import Transportation, { ITransportation } from 'api/Transportation';
import Quotes from 'api/Quotes';
import { IQuote } from 'api/Quotes';
import ResponseFormatter from 'utils/ResponseFormatter';
import { RouteComponentProps } from 'react-router';
import { ICreateQuoteParams } from '../../api/Quotes';

interface IProps extends RouteComponentProps {

}

type TFormKeys = 'departureAirport' | 'destinationAirport' | 'startDate' | 'endDate' | 'people' | 'transportation' | 'contact';

interface IState {
    airports: IAirport[];
    transportation: ITransportation[];
    form: {
        departureAirport: string;
        destinationAirport: string;
        startDate: string;
        endDate: string;
        people: number;
        transportation: number;
        contact: string;
    };
    error?: string;
}

export default class QuickQuote extends React.Component<IProps, IState> {
    private readonly airportsApi: Airports;
    private readonly transportationApi: Transportation;
    private readonly quotesApi: Quotes;
    private readonly responseFormatter: ResponseFormatter;

    constructor(props: Readonly<IProps>) {
        super(props);

        this.airportsApi = new Airports();
        this.transportationApi = new Transportation();
        this.quotesApi = new Quotes();
        this.responseFormatter = ResponseFormatter.defaultResponseFormatter;

        this.state = {
            airports: [],
            transportation: [],
            form: {
                departureAirport: '',
                destinationAirport: '',
                startDate: '',
                endDate: '',
                people: 0,
                transportation: 0,
                contact: ''
            }
        };

        this.populateAirports = this.populateAirports.bind(this);
        this.populateTransportation = this.populateTransportation.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    public componentDidMount() {
        this.populateAirports();
        this.populateTransportation();
    }

    public async populateAirports() {
        const airports = await this.airportsApi.all();

        this.setState({ airports: airports.data });
    }

    public async populateTransportation() {
        const transportation = await this.transportationApi.all();

        this.setState({ transportation: transportation.data });
    }

    public async onSubmit(e: FormEvent<HTMLFormElement>) {
        const { form } = this.state;

        e.preventDefault();

        const quote: ICreateQuoteParams = {
            from_iata_code: form.departureAirport,
            to_iata_code: form.destinationAirport,
            start_date: form.startDate,
            end_date: form.endDate,
            transportation_id: form.transportation,
            people: form.people,
            contact_name: form.contact
        };

        try {
            const created = await this.quotesApi.create(quote);

            this.props.history.push(`/quotes/${created.data.id}`);
        } catch (err) {
            const message = this.responseFormatter.parse(err.response);

            this.setState({ error: message });
        }
    }

    private onInputChange(name: keyof IState['form'], value: string | number) {
        this.setState((prevState) => ({
            form: {
                ...prevState.form,
                [name]: value
            }
        }));
    }

    public render() {
        const { airports, transportation, error } = this.state;

        const today = new Date().toISOString().split('T')[0];

        return (
            <Card body>
                {error !== undefined &&
                    <SweetAlert danger title="Oops..." onConfirm={() => this.setState({ error: undefined })}>
                        <p>{error}</p>
                    </SweetAlert>
                }

                <CardTitle tag="h4">Quick Quote</CardTitle>

                <Form onSubmit={this.onSubmit}>
                    <Row form className="mb-2">
                        <Col>
                            <Label for="from" hidden>Departure Airport</Label>
                            <Input type="select" name="from" id="from" defaultValue="" bsSize="lg" onChange={(e) => this.onInputChange('departureAirport', e.currentTarget.value)} required>
                                <option value="" disabled>Departure Airport</option>
                                {airports.map((airport, key) => (
                                    <option key={key} value={airport.iata_code}>{airport.airport}</option>
                                ))}
                            </Input>
                        </Col>
                        <Col>
                            <Label for="to" hidden>Destination Airport</Label>
                            <Input type="select" name="to" id="to" defaultValue=""  bsSize="lg" onChange={(e) => this.onInputChange('destinationAirport', e.currentTarget.value)} required>
                                <option value="" disabled>Destination Airport</option>
                                {airports.map((airport, key) => (
                                    <option key={key} value={airport.iata_code}>{airport.airport}</option>
                                ))}
                            </Input>
                        </Col>
                    </Row>
                    <Row form className="mb-2">
                        <Col>
                            <Label for="start" hidden>Start Date</Label>
                            <Input type="date" name="start" id="start" bsSize="lg" min={today} onChange={(e) => this.onInputChange('startDate', e.currentTarget.value)} required/>
                        </Col>
                        <Col>
                            <Label for="end" hidden>End Date</Label>
                            <Input type="date" name="end" id="end" bsSize="lg" min={today} onChange={(e) => this.onInputChange('endDate', e.currentTarget.value)} required/>
                        </Col>
                    </Row>
                    <Row form className="mb-2">
                        <Col>
                            <Label for="people" hidden># of People</Label>
                            <Input type="number" name="people" id="people" bsSize="lg" min="1" max="100" placeholder="# of People" onChange={(e) => this.onInputChange('people', Number(e.currentTarget.value))} required/>
                        </Col>
                        <Col>
                            <Label for="transportation" hidden>Transportation</Label>
                            <Input type="select" name="transportation" id="transportation" defaultValue="" bsSize="lg" onChange={(e) => this.onInputChange('transportation', e.currentTarget.value)} required>
                                <option value="" disabled>Transportation</option>
                                {transportation.map((item, key) => (
                                    <option key={key} value={item.id}>{item.company} ({item.type})</option>
                                ))}
                            </Input>
                        </Col>
                    </Row>
                    <Row form className="mb-2">
                        <Col>
                            <Label for="name" hidden>Contact Name</Label>
                            <Input type="text" name="name" id="name" bsSize="lg" placeholder="Contact Name" onChange={(e) => this.onInputChange('contact', e.currentTarget.value)} required/>
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
