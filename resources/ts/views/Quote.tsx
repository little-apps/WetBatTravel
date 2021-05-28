import React from "react";
import { Card, CardTitle, Col, Jumbotron, Row, Table } from "reactstrap";
import { RouteComponentProps } from "react-router";
import ReactLoading from 'react-loading';
import Quotes, { IQuote } from 'api/Quotes';
import SweetAlert from "react-bootstrap-sweetalert";
import { AxiosError } from "axios";
import axios from 'axios';
import ResponseFormatter from 'utils/ResponseFormatter';
import classNames from "classnames";

interface ILocationParams {
    id: string;
}

interface IProps extends RouteComponentProps<ILocationParams> {

}

interface IState {
    quote?: IQuote;
    error?: string;
}

export default class Quote extends React.Component<IProps, IState> {
    private readonly quotesApi: Quotes;
    private readonly responseFormatter: ResponseFormatter;

    constructor(props: Readonly<IProps>) {
        super(props);

        this.quotesApi = new Quotes();
        this.responseFormatter = ResponseFormatter.defaultResponseFormatter;

        this.responseFormatter.addFormatterForStatusCode(404, () => `Unable to find quote with ID #${props.match.params.id}`);

        this.state = {
        };

        this.populateQuote = this.populateQuote.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    public componentDidMount() {
        this.populateQuote();
    }

    public async populateQuote() {
        const { id } = this.props.match.params;

        try {
            const response = await this.quotesApi.get(Number(id));

            this.setState({ quote: response.data });
        } catch (err) {
            const message = this.responseFormatter.parse(err.response);

            this.setState({ error: message });
        }
    }

    private handleError() {
        this.props.history.push('/quotes');
    }

    public render() {
        const { id } = this.props.match.params;
        const { quote, error } = this.state;

        const boldItemIds = [
            'subTotal',
            'total'
        ];

        return (
            <Card body>
                {quote === undefined && error === undefined &&
                    <div className='parent-loader'>
                        <ReactLoading type="spin" />
                    </div>
                }
                {error !== undefined &&
                    <SweetAlert danger title="Oops..." onConfirm={this.handleError}>
                        <p>{error}</p>
                    </SweetAlert>
                }

                <CardTitle tag="h4">Quote #{id}</CardTitle>

                <Table borderless>
                    <tbody>
                        <tr>
                            <td className="text-right font-weight-bold">From:</td>
                            <td>{quote?.from.airport} ({quote?.from.iata_code})</td>
                            <td className="text-right font-weight-bold">To:</td>
                            <td>{quote?.to.airport} ({quote?.to.iata_code})</td>
                        </tr>
                        <tr>
                            <td className="text-right font-weight-bold">Start Date:</td>
                            <td>{quote?.start_date}</td>
                            <td className="text-right font-weight-bold">End Date:</td>
                            <td>{quote?.end_date}</td>
                        </tr>
                        <tr>
                            <td className="text-right font-weight-bold">Transportation:</td>
                            <td>{quote?.transportation.company} ({quote?.transportation.type})</td>
                            <td className="text-right font-weight-bold">People:</td>
                            <td>{quote?.people}</td>
                        </tr>
                        <tr>
                            <td className="text-right font-weight-bold">Contact:</td>
                            <td>{quote?.contact_name}</td>
                        </tr>
                    </tbody>
                </Table>

                <Table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th className="text-center">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quote?.cost_items.map((item, key) => (
                            <tr key={key}>
                                <td className={classNames({ 'font-weight-bold': boldItemIds.includes(item.id) })}>{item.description}</td>
                                <td className={classNames('text-center', { 'font-weight-bold': boldItemIds.includes(item.id) })}>${item.price.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        );
    }
}
