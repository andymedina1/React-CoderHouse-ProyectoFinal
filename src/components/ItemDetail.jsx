import Card from 'react-bootstrap/Card'

function ItemDetail ({ title, description, price, pictureUrl }) {
  return (
    <div className='d-flex justify-content-center' style={{ width: '70%', margin: '2em auto' }}>
      <Card border='secondary'>
        <div className='d-flex'>
          <div>
            <Card.Img variant='top' src={pictureUrl} alt={'Imágen de ' + title} />
          </div>
          <div style={{ paddingLeft: '20px', borderLeft: '1px solid #757575' }}>
            <Card.Body style={{ height: '80%' }} className='d-flex flex-column justify-content-around text-center'>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <Card.Title>{price}</Card.Title>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ItemDetail
