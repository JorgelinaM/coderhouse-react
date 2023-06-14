import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../services/config';
import { getDoc, doc } from 'firebase/firestore';

import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [book, setBook] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
      const newDoc = doc(db, "items", itemId);
      
      getDoc(newDoc)
        .then(res => {
          const data = res.data();
          const currentBook = {
            id: res.id,
            ...data
          };

          setBook(currentBook)
        })
        .catch(error => console.log(error))
    }, [itemId])

  return (
    <div className='c-item-detail'>
       <ItemDetail book={book} />
    </div>
  )
}

export default ItemDetailContainer;