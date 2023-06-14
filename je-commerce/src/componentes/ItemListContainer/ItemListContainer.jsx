import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore";

import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { db } from "../../services/config";

const ItemListContainer = (props) => {
  const [books, setBooks] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const dbBooks = query(collection(db, 'items'), idCategory && where('categoryId', '==', idCategory));

    getDocs(dbBooks)
    .then(res => setBooks(res.docs.map(doc => (
      {
        id: doc.id,
        ...doc.data()
      }
    ))));
  }, [idCategory])

  return (
    <div className='c-item-list-container'>
      <h2>Book List</h2>
      {idCategory && <h3>{idCategory}</h3>}
      <ItemList books={books} />
    </div>
  )
}

export default ItemListContainer