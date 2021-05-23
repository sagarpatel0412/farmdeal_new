import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'
import {Link} from "react-router-dom"


function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    return (
        <div>
            {/* {!keyword && <ProductCarousel />} */}
            {/* <ProductCarousel/> */}
            <div className="alert alert-success" role="alert" style={{backgroundColor:"#1F618D",color:"white"}}>
              <marquee><Link to="/msp" style={{color:"white",textDecoration:"none"}}>Check Msp Status</Link> || <Link to="/Agri-Market" style={{color:"white",textDecoration:"none"}}>Agricultural market</Link> </marquee>
            </div>
            <h1>Listen to what Ministry of Agriculture say</h1>
            <Row>
            <Col sm={12}>
          
            <iframe width="956" height="538" src="https://www.youtube.com/embed/S9IcLTfeTUI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
            </Col>  
            </Row>

            <h1>Latest Products</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }
        </div>
    )
}

export default HomeScreen
