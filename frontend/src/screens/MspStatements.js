import React from 'react'
import msp from '../msp';
import {Table,Row,Col} from "react-bootstrap";

function MspStatements() {
    console.log("msp===>",msp);
    return (
        <div>
            <h1>Minimum Support price</h1>
            <p>Msp here shown are from last two year Reference from <a href="https://farmer.gov.in/mspstatements.aspx" style={{fontWeight:"bolder"}}>farmers portal</a></p>
            <p>Reference: number are reference to price</p>
            <Row>
                <Col>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th style={{fontSize:"16px"}}>Commodity</th>
                    <th style={{fontSize:"16px"}}>2019-20</th>
                    <th style={{fontSize:"16px"}}>2020-21</th>
                    </tr>
                </thead>
                <tbody>
                    {msp.map((item) =>{
                    return(
                     <tr>
                     <td>{item.commodity}</td>
                     <td>{item.yearone} &#8377;</td>
                     <td>{item.yeartwo} &#8377;</td>
                     </tr>
                    )
                    })} 
                </tbody>
            </Table>
            </Col>
            </Row>
        </div>
    )
}
//open weather map 9e8e23893d9809d88d05092556993bb1

export default MspStatements
