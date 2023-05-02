import React from 'react'
import './listItems.css'
import Item from '../Item/Item'

function ListItems({ items, handleDelete }) {
  return (
    <ul className='list-item-screen'>
        {items.map((item) => 
            <Item 
                key={item.id}
                item={item}
                handleDelete={handleDelete}
            />
        )}
    </ul>
  )
}

export default ListItems