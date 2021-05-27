import Request from "api/request/Request";

export interface IAirport {
    code: string;
    airport: string;
    [key: string]: any;
}

export default class Airports {
    private readonly request: Request;

    public constructor() {
        this.request = new Request();
    }

    public all() {
        const response = this.request.get<IAirport[]>(Request.buildUrl("airports"));

        return response;
    }
}
