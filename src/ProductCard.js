import React from 'react'
import { Card} from 'react-bootstrap';

function ProductCard({product}) {

  return (
    <>
   
    <Card  className='mb-3 border rounded p-2' >
    <Card.Img  variant="top" style={{height:"400px"}} src={product.image} />
    <Card.Body>
      <Card.Title>{product.title.slice(0,20)}</Card.Title>
      <Card.Text className='mb-2'>
        Price: {product.price} $
        
      </Card.Text>
      {product.description.slice(0,50)}
    </Card.Body>
  </Card>
  </>
  )
}

export default ProductCard