import React from 'react'
import markets from '../markets';
import {Col,Row,Table} from 'react-bootstrap'

function AgriMarket() {
    console.log("markets====>",markets)
    return (
        <div>
           <h1>Market List</h1> 
           <Row>
               <Col>
               <div>
                
               <h1>there are {markets[0].data.length} markets</h1>
                 {markets.map((item) => {
                     return(
                      
                     item.data.map((i) =>{
                         return (
                             
                             <div>
                                 
                                <p>District name:{i[0]}</p>
                                <p>Block Name: {i[1]}</p>
                                <p>Market Name: {i[2]}</p>
                                <hr/> 
                             </div>
                         )
                     })
                      )})}
                 
               </div>
               </Col>
           </Row>
        </div>
    )
}

export default AgriMarket

