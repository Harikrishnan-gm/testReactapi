import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { base_url } from './base_url'
import ProductCard from './ProductCard'
import { Col,Row } from 'react-bootstrap'

function Products() {
    const [product,setProducts]=useState([])
    const fetchData=async()=>{
        const {data}=await axios.get(`${base_url}`)
        // console.log(data);
        setProducts(data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    // console.log(products);
  return (
    <Row  className='p-2 bg-warning'>
        {
            product.map(item=>(
                <Col  sm={12} md={6} lg={4} xl={3}>
                    <ProductCard product={item}/>
                </Col>
                ))
            }    
    </Row>
  )
}

export default Products