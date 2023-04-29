import './ItemListContainer.css';

const ItemListContainer = (props) => {
  return (
    <p className='c-item-list'>{props.greeting}</p>
  )
}

export default ItemListContainer