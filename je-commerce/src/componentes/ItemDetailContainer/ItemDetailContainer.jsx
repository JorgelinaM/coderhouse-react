import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getBook } from '../../asyncmock';

import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [book, setBook] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        getBook(itemId)
            .then(bookData => setBook(bookData))
            .catch(error => console.log(error))
    }, [itemId])

  return (
    <div className='c-item-detail'>
       <ItemDetail book={book} />
    </div>
  )
}

export default ItemDetailContainer;