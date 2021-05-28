import Request from "api/request/Request";
import { IAirport } from './Airports';
import { ITransportation } from './Transportation';

export interface IQuoteItems {
    id: string;
    description: string;
    price: number;
}

export interface IQuote {
    from: IAirport;
    to: IAirport;
    start_date: string;
    end_date: string;
    transportation: ITransportation;
    people: number;
    contact_name: string;
    cost_items: IQuoteItems[];
    adjusted_cost?: number;
    [key: string]: any;
}

export interface ICreateQuoteParams {
    from_iata_code: string;
    to_iata_code: string;
    start_date: string;
    end_date: string;
    transportation_id: number;
    people: number;
    contact_name: string;
}

export default class Quotes {
    private readonly request: Request;

    public constructor() {
        this.request = new Request();
    }

    public all() {
        const response = this.request.get<IQuote[]>(Request.buildUrl("quotes"));

        return response;
    }

    public get(id: number) {
        const response = this.request.get<IQuote>(Request.buildUrl("quotes", String(id)));

        return response;
    }

    public create(quote: ICreateQuoteParams) {
        const response = this.request.post<IQuote>(Request.buildUrl("quotes"), quote);

        return response;
    }
}
