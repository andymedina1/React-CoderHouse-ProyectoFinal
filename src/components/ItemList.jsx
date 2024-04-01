import Item from './Item'

function ItemList ({ products }) {
  return (
    <main className='d-flex align-center gap-5 m-5'>
      {products.map(product =>
        <Item key={product.id} {...product} />
      )}
    </main>
  )
}

export default ItemList