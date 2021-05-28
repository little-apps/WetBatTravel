import Request from "api/request/Request";

export interface ITransportation {
    id: number;
    company: string;
    type: string;
    [key: string]: any;
}

export default class Transportation {
    private readonly request: Request;

    public constructor() {
        this.request = new Request();
    }

    public all() {
        const response = this.request.get<ITransportation[]>(Request.buildUrl("transportation"));

        return response;
    }
}
