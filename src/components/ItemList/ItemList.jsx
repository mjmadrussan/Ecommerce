import Item from '../Item/Item.jsx';
import { Container } from 'react-bootstrap';
import './ItemList.css';


function ItemList({ items }) {
  return (
    <>
    { items.map(thisitem => {
      return (
        <Container key={thisitem.id}>
          <Item picture={thisitem.picture} stock={thisitem.stock} item={thisitem.id} name={thisitem.name} description={thisitem.description} product={thisitem.product} price={thisitem.price}/>
  </Container>
      )
    })}
    </>
  )
}

export default ItemList