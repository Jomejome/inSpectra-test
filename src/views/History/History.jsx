import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';
import Card from 'components/Card/Card.jsx';

class TableList extends Component {
    constructor(props) {
        super(props)
        var tmp = this.updateData();
        this.state = {
             data: tmp,
             header: ['Timestamp', 'visible', 'PCA', 'Status']
        }
    }
    updateData(){
        axios.get('http://localhost:3003')
        .then(function (response) {
            var ret = (response.data);
            console.log('updateData')
            console.log(ret);
            return ret;
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
                                                // this.state.data.map((prop,key) => {
                                                //     return (
                                                //         <tr key={key}>{
                                                //             prop.map((prop,key)=> {
                                                //                 return (
                                                //                     <td  key={key}>{prop}</td>
                                                //                 );
                                                //             })
                                                //         }</tr>
                                                //     )
                                                // })
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
                                                // tdArray.map((prop,key) => {
                                                //     return (
                                                //         <tr key={key}>{
                                                //             prop.map((prop,key)=> {
                                                //                 return (
                                                //                     <td  key={key}>{prop}</td>
                                                //                 );
                                                //             })
                                                //         }</tr>
                                                //     )
                                                // })
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
