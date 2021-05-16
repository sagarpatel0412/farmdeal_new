import React from 'react'
//import {Carousel,Row,Col} from 'react-bootstrap'

function Contact() {
    return (
        <div>
            <div className="container">
                {/* <Row>
                <Col>
                <Carousel>
                <Carousel.Item>
                    <img
                   // className="w-100"
                    src="https://images.unsplash.com/photo-1565061828011-282424b9ab40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybSUyMHdob2xlc2FsZSUyMG1hcmtldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                </Col>
                </Row> */}
                <div className="row">
                    <div className="col-6">
                    <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFybXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="hello" style={{height:"500px",width:"500px",borderRadius:"12px",border:"none"}} />
                    </div>
                    <div className="col-6" style={{backgroundColor:"#E8F8F5"}}>
                        <center>
                        <h1><i className="fas fa-id-card-alt"></i> Contact info</h1><hr/>
                        <h3><i className="fas fa-envelope"></i> Email</h3>
                        <p>sapling.engineer25@gmail.com</p>
                        <h3><i className="fas fa-phone-square-alt"></i> Phone</h3>
                        <p>+91-1234567890</p>
                        </center>
                    </div>
                </div>
                <div className="row" style={{marginTop:"50px"}}>
                <div className="col-12" style={{backgroundColor:"#AED6F1",padding:"20px",borderRadius:"12px",border:"none"}}>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
