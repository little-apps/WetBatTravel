import React from "react";
import { Pie } from "react-chartjs-2";
import FontAwesome from "react-fontawesome";
import { Card, CardTitle, Col, Row } from "reactstrap";

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
    ]
};

const options = {
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false
        }
    }
};

interface IProps {

}

interface IState {

}

export default class PotentialRevenue extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
    }

    public render() {
        return (
            <Card body>
                <CardTitle tag="h4">
                    <FontAwesome name="pie-chart" />{' '}
                    Potential Revenue
                </CardTitle>

                <Row>
                    <Col sm={4}>
                        <Pie type="pie" data={data} options={options} />
                    </Col>
                    <Col sm={4}>
                        <Pie type="pie" data={data} options={options} />
                    </Col>
                    <Col sm={4}>
                        <Pie type="pie" data={data} options={options} />
                    </Col>
                </Row>
            </Card>
        );
    }
}
