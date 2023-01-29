import ItemCount from '../ItemCount/ItemCount';
import { Container } from 'react-bootstrap';



function ItemListContainer({greeting}) {
    return (
        <Container>
<h1>{greeting}</h1>
<div><ItemCount stock={10} initial={1} /></div>
</Container>
        );
    }
    
    export default ItemListContainer;