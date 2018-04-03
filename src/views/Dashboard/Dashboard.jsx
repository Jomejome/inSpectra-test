import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Grid, Row, Col } from 'react-bootstrap';
import {Card} from 'components/Card/Card.jsx';
import axios from 'axios';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            curTime : new Date(),
            update_seconds: 0,
            upRate: 2,
            imgUrl_visible: '',
            imgUrl_false: '',
            blobPeak: 0
        }

        this.updateImg();
    }
    updateImg(){
        axios.get('https://inspectra-node.azurewebsites.net/')
        .then((response) => {
            var ret = (response.data);
            var peak;
            for (var i=0 ; i<ret.length ; i++) {
                if (!peak || parseInt(ret[i]["blobCount"]) > parseInt(peak))
                    peak = ret[i]["blobCount"];
            }

            ret = ret[ret.length-1]
            console.log('updateImg');
            console.log(ret);
            this.setState({

                imgUrl_visible: ret.visible,
                imgUrl_false: ret.false,
                blobPeak: peak
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    componentDidMount() {
        
        setInterval( () => {
            this.setState({
                curTime : new Date(),
                update_seconds: this.state.update_seconds+1
            })
           
            if(this.state.update_seconds > this.state.upRate) {
                
                this.setState({
                    update_seconds: 0,
                })
                this.updateImg()
            }
          
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
                                stats={"Updated " + this.state.update_seconds + " second(s) ago"}
                                content={
                                    <div className="plant1">
                                       <img src={this.state.imgUrl_visible} alt="vis1" width='45%' height='auto'/>
                                       
                                       <img src={this.state.imgUrl_false} alt="pca1" width='45%' height='auto'/>
                                    </div>
                                    }
                            />
                        </Col>
                        <Col md={4}>
                            <Card
                                statsIcon="fa fa-clock-o"
                                title="Status"
                                // category="Last Campaign Performance"
                                stats={this.state.curTime.toLocaleString()}
                                content={
                                    <div className="today-stat">
                                        inspectra-01 <br/><br/>
                                        
                                            run-time: less than 1 Hour(s) <br/>
                                            blob peak value: {this.state.blobPeak}
                                        
                                            <br/><br/>
                                        inspectra-02 <br/><br/>
                                        
                                            run-time: 37 Hour(s)
                                        
                                    </div>
                                }
                            
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
                                    <div className="pca2" style={{width: '100 px'}}>
                                       <img src="https://inspectrastorage.blob.core.windows.net/inspectracontainer/y2018_m3_d6_hr15_min32_sec38_visible" width="45%" alt="pca2"/>
                                       <img src="https://inspectrastorage.blob.core.windows.net/inspectracontainer/y2018_m3_d6_hr15_min32_sec38_false" width="45%" alt="pca2"/>
                                       
                                    </div>
                                
                                    }
                                
                            />
                        </Col>
                    </Row>

                </Grid>
            </div>
        );
    }
}

export default Dashboard;
