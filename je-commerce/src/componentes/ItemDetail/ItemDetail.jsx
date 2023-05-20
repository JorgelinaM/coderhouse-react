import { useState } from 'react';
import { useParams } from 'react-router-dom';


import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ book }) => {
    const { image, title, description, price, stock } = book;
    const [counter, setCounter] = useState(0);

    const handleCounter = (value) => {
        let parsedValue = parseInt(value);
        if (parsedValue < 0 || parsedValue > parseInt(stock)) {
            parsedValue = counter;
        }
        setCounter(!isNaN(parsedValue) ? parsedValue : '');
    }

    return (
        <div className='c-item-detail'>
            <img src={image} alt={title} />
            <div className='c-item-detail__info'>
                <h1>{title}</h1>
                <p>{description}</p>
                <span>${price}</span>
                <div className='c-item-detail__cart-inputs'>
                    <ItemCount counter={counter} handleCounter={handleCounter} stock={stock} />
                    <button className='c-button'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;