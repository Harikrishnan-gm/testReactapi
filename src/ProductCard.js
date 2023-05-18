import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

function ProductCard({product}) {
;
  return (
    
    <Card  className='mb-3 border rounded p-2' style={{}}>
    <Card.Img fluid variant="top" style={{height:"400px"}} src={product.image}  / >
    <Card.Body>
      <Card.Title>{product.title.slice(0,20)}</Card.Title>
      <Card.Text className='mb-2'>
        <h6>Price: {product.price} $</h6>
        <p>{product.description.slice(0,50)}</p>
      </Card.Text>
      
    </Card.Body>
  </Card>
  )
}

export default ProductCard