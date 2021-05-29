import React from "react";
import { Table } from "reactstrap";
import ReactLoading from 'react-loading';
import FA from 'react-fontawesome';

import Quotes, { IQuote } from "api/Quotes";

interface IProps {
    items?: number;
}

interface IState {
    isLoading: boolean;
    quotes: IQuote[];
}

export default class QuotesTable extends React.Component<IProps, IState> {
    private readonly quotesApi: Quotes;

    constructor(props: Readonly<IProps>) {
        super(props);

        this.quotesApi = new Quotes();

        this.state = {
            isLoading: true,
            quotes: []
        };

        this.populateQuotes = this.populateQuotes.bind(this);
    }

    public componentDidMount() {
        this.populateQuotes();
    }

    public async populateQuotes() {
        const { items } = this.props;

        try {
            const response = await this.quotesApi.all();

            const quotes = items !== undefined ? response.data.slice(0, items) : response.data;

            this.setState({ quotes, isLoading: false });
        } catch (err) {
        }
    }

    private getTotalFromQuote(quote: IQuote) {
        if (quote.adjusted_cost)
            return quote.adjusted_cost;

        for (const item of quote.cost_items) {
            if (item.id === 'total')
                return item.price;
        }

        return NaN;
    }

    public render() {
        const { quotes, isLoading } = this.state;

        return (
            <>
                {isLoading &&
                    <div className='parent-loader'>
                        <ReactLoading type="spin" />
                    </div>
                }

                <Table bordered responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Destination</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quotes.map((quote, key) => (
                            <tr key={key}>
                                <td scope="row">{quote.id}</td>
                                <td>{quote.contact_name}</td>
                                <td>{quote.to.airport}</td>
                                <td>${this.getTotalFromQuote(quote).toFixed(2)}</td>
                                <td className="text-center">
                                    <a href={`/quotes/${quote.id}`}>
                                        <FA name="eye" />{' '}
                                        View
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </>
        );
    }
}
