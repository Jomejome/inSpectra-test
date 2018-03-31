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
        console.log(this.state.data);
    }
    updateData(){
        axios.get('http://localhost:3003')
        .then( (response) => {
            var ret = (response.data);
            console.log('updateData')
            console.log(ret);
   
            this.setState({

                data: ret
            });
            console.log("this.state.data");
            console.log(this.state.data);
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
                                                            <th width='20%'><img src={prop.visible} alt="vis" width='90%' height='auto'/></th>
                                                            <th width='20%'><img src={prop.false} alt="false" width='90%' height='auto'/></th>
                                                            <th width='15%'> 0 </th>
                                                            <th width='15%'>Normal</th>
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
