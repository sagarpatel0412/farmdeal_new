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
                    <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFybXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="hello" style={{height:"500px",width:"450px"}} />
                    </div>
                    <div className="col-6">
                        <h1>Contact info</h1>
                        <h3>Email</h3>
                        <p>sapling.engineer25@gmail.com</p>
                        <h3>Phone</h3>
                        <p>+91-1234567890</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
