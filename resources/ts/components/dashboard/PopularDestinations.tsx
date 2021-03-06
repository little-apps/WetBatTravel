import React from "react";
import { Card, CardTitle, Col, Row } from "reactstrap";
import { Bar } from 'react-chartjs-2';
import { VectorMap } from 'react-jvectormap';
import FontAwesome from "react-fontawesome";

const data = {
    labels: ['Calgary', 'Edmonton', 'Ottawa', 'Toronto', 'Montreal'],
    datasets: [
        {
            label: 'Places',
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
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
        bar: {
            borderWidth: 2
        }
    },
    responsive: true,
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

export default class PopularDestinations extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
    }

    public render() {
        return (
            <Card body className="pb-5">
                <CardTitle tag="h4">
                    <FontAwesome name="paper-plane-o" />{' '}
                    Popular Destinations &amp; Packages
                </CardTitle>

                <Row>
                    <Col sm={4}>
                        <Bar type="bar" data={data} options={options} />
                    </Col>

                    <Col sm={8} style={{ width: '100%', height: '300px' }}>
                        <VectorMap map={'ca_lcc'}
                                ref="map"
                                containerStyle={{
                                    width: '100%',
                                    height: '100%'
                                }}
                                containerClassName="map"
                        />
                    </Col>
                </Row>
            </Card>
        );
    }
}
