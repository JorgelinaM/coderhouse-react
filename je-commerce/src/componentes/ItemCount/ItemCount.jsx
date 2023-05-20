import './ItemCount.css'

const ItemCount = ({ counter, handleCounter, stock }) => {
  

  return (
    <div className='c-item-count'>
        <div className="c-item-count__wrapper">
            <button onClick={() => handleCounter(counter - 1)}>-</button>
            <input value={counter} onChange={(event) => handleCounter(event.target.value)} />
            <button onClick={() => handleCounter(counter + 1)}>+</button>
        </div>
        <span>Can't buy more than {stock} items for this product.</span>
    </div>
  )
}

export default ItemCount;
