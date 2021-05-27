import React from "react";
import { Card, CardTitle, Table } from "reactstrap";

interface IProps {

}

interface IState {

}

export default class PendingQuotes extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
    }

    public render() {
        return (
            <Card body>
                <CardTitle tag="h4">Pending Quotes</CardTitle>

                <Table bordered>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Destination</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>Joe Blow</td>
                            <td>Calgary</td>
                            <td>$1999.95</td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>Joe Blow</td>
                            <td>Calgary</td>
                            <td>$1999.95</td>
                        </tr>
                        <tr>
                            <td scope="row">3</td>
                            <td>Joe Blow</td>
                            <td>Calgary</td>
                            <td>$1999.95</td>
                        </tr>
                        <tr>
                            <td scope="row">4</td>
                            <td>Joe Blow</td>
                            <td>Calgary</td>
                            <td>$1999.95</td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        );
    }
}
