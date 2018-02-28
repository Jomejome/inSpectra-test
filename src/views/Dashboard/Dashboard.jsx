import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Grid, Row, Col } from 'react-bootstrap';
import {Card} from 'components/Card/Card.jsx';

class Dashboard extends Component {

    createLegend(json){
        var legend = [];
        for(var i = 0; i < json["names"].length; i++){
            var type = "fa fa-circle text-"+json["types"][i];
            legend.push(
                <i className={type} key={i}></i>
            );
            legend.push(" ");
            legend.push(
                json["names"][i]
            );
        }
        return legend;
    }

    state = {
        curTime : new Date().toLocaleString()
    }

    componentDidMount() {
        setInterval( () => {
          this.setState({
            curTime : new Date().toLocaleString()
          })
        },1000)
        
    }

    render() {
        
        return (
            <div className="content">
                <Grid fluid>
                    {/* <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-server text-warning"></i>}
                                statsText="Capacity"
                                statsValue="105GB"
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="Updated now"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-wallet text-success"></i>}
                                statsText="Revenue"
                                statsValue="$1,345"
                                statsIcon={<i className="fa fa-calendar-o"></i>}
                                statsIconText="Last day"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-graph1 text-danger"></i>}
                                statsText="Errors"
                                statsValue="23"
                                statsIcon={<i className="fa fa-clock-o"></i>}
                                statsIconText="In the last hour"
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="fa fa-twitter text-info"></i>}
                                statsText="Followers"
                                statsValue="+45"
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="Updated now"
                            />
                        </Col>
                    </Row> */}
                    <Row>
                        <Col md={8}>
                            <Card
                                statsIcon="fa fa-history"
                                id="pca"
                                title="PCA Output"
                                category="inspectra-01 inspecting plant SC | area G01"
                                stats="Updated 2 minutes ago"
                                content={
                                    <div className="pca1">
                                       <img src="https://preview.ibb.co/hVTh0x/pca_mock.png" />
                                    </div>
                                    }
                                // legend={
                                //     <div className="legend">
                                //         this is it
                                //     </div>
                                // }
                                // 
                            />
                        </Col>
                        <Col md={4}>
                            <Card
                                statsIcon="fa fa-clock-o"
                                title="Status"
                                // category="Last Campaign Performance"
                                stats={this.state.curTime}
                                content={
                                    <div className="today-stat">
                                        inspectra-01
                                        <p>
                                            run-time: {}
                                        </p>
                                        inspectra-02
                                        <p>
                                            run-time: {}
                                        </p>
                                    </div>
                                }
                                // legend={
                                //     <div className="legend">
                                //         {this.createLegend(legendPie)}
                                //     </div>
                                // }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <Card
                                statsIcon="fa fa-history"
                                id="pca"
                                title="PCA Output"
                                category="inspectra-02 inspecting plant SC | area G02"
                                stats="Updated 12 hours ago"
                                content={
                                    <div className="pca2">
                                       <img src="https://preview.ibb.co/hVTh0x/pca_mock.png" />
                                    </div>
                                    }
                                // legend={
                                //     <div className="legend">
                                //         this is it
                                //     </div>
                                // }
                                // 
                            />
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col md={6}>
                            <Card
                                id="chartActivity"
                                title="2014 Sales"
                                category="All products including Taxes"
                                stats="Data information certified"
                                statsIcon="fa fa-check"
                                content={
                                    <div className="ct-chart">
                                        <ChartistGraph
                                            data={dataBar}
                                            type="Bar"
                                            options={optionsBar}
                                            responsiveOptions={responsiveBar}
                                        />
                                    </div>
                                }
                                legend={
                                    <div className="legend">
                                        {this.createLegend(legendBar)}
                                    </div>
                                }
                            />
                        </Col>

                        <Col md={6}>
                            <Card
                                title="Tasks"
                                category="Backend development"
                                stats="Updated 3 minutes ago"
                                statsIcon="fa fa-history"
                                content={
                                    <div className="table-full-width">
                                        <table className="table">
                                            <Tasks />
                                        </table>
                                    </div>
                                }
                            />
                        </Col>
                    </Row> */}

                </Grid>
            </div>
        );
    }
}

export default Dashboard;
