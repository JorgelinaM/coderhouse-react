
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ books }) => {
  
  return (
    <div className='c-item-list'>
        {books.map(book => <Item key={book.id} book={book}/>)}
    </div>
  )
}

export default ItemList;