import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getBooks, getBooksByCategory } from '../../asyncmock';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {
  const [books, setBooks] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory) {
      getBooksByCategory(idCategory)
        .then(books => setBooks(books))
        .catch(error => console.log(error))
    } else { 
      getBooks()
      .then(books => setBooks(books))
      .catch(error => console.log(error))
    }
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