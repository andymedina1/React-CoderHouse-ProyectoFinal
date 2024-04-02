import Card from 'react-bootstrap/Card'

function ItemDetail ({ title, description, price, pictureUrl }) {
  return (
    <div className='d-flex justify-content-center mt-5'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={pictureUrl} alt={'Imágen de ' + title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description} {price}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetail
