import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';
import Card from 'components/Card/Card.jsx';

class TableList extends Component {
    constructor(props) {
        super(props)
        this.updateData();
        this.state = {
            data: [],
            header: ['Timestamp', 'visible', 'PCA', 'Blob', 'Status']
        }
    }
    updateData(){
        axios.get('https://inspectra-node.azurewebsites.net/')
        .then( (response) => {
            var ret = (response.data);
            console.log('updateData')  
            console.log(ret);           
   
            this.setState({

                data: ret.reverse()
            });


        })
        .catch(function (error) {
            console.log(error);
        });
    }

    // componentDidMount() {
                 
    //     setInterval( () => {

          
    //     },1000)
    // }
    
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Today's activity"
                                category="showing history log of plant SC - area G01"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    this.state.header.map((prop, key) => {
                                                        return (
                                                        <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.data.map((prop,key) => { 
                                                    return (
                                                        <tr key={key}>
                                                            <th width='30%'>{prop.timestamp}</th>
                                                            <th width='20%'><img src={prop.visible} alt="vis1" width='90%' height='auto'/></th>
                                                            <th width='20%'><img src={prop.false} alt="false1" width='90%' height='auto'/></th>
                                                            <th width='15%'> {prop.blobCount || 0} </th>
                                                            <th width='15%'> {status = prop.blobCount > 10? "Abnormal":"Normal"}</th>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Today's activity"
                                category="showing history log of plant SC - area G02"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    this.state.header.map((prop, key) => {
                                                        return (
                                                        <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                <tr>
                                                    <th>This</th>
                                                    <th>is</th>
                                                    <th>a</th>
                                                    <th>Mock</th>
                                                    <th>Up</th>
                                                </tr>
                                            }
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default TableList;
