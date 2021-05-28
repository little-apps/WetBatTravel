import React from "react";
import { Line } from "react-chartjs-2";
import FontAwesome from "react-fontawesome";
import { Card, CardTitle } from "reactstrap";

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)'
        },
        {
            label: '# of No Votes',
            data: [1, 2, 1, 1, 2, 2],
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 0.2)'
        }
    ]
};

const options = {
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Places'
        }
    }
};

interface IProps {

}

interface IState {

}

export default class Revenue extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
    }

    public render() {
        return (
            <Card body>
                <CardTitle tag="h4">
                    <FontAwesome name="bar-chart-o" />{' '}
                    Revenue
                </CardTitle>

                <Line type="line" data={data} options={options} />
            </Card>
        );
    }
}
