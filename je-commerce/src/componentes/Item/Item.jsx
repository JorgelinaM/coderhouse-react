import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ book }) => {
  const { title, image, price, id } = book;

  return (
    <div className='c-item'>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <span>${price}</span>
        <Link to={`/book/${id}`}>
          <span className='c-button'>View More</span>
        </Link>
    </div>
  )
}

export default Item;
