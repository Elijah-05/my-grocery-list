import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import './item.css'

function Item({ item, handleDelete }) {
  return (
    <li className='list-item'>
        {/* <div> */}
          <p className='item-name'>{item.name}</p>
          <div className='list-desc'>
            <p>{item.quantity}</p>
            <p>{item.price}</p>
            <button onClick={() => handleDelete(item.id, item.name)}>
              <FaTrashAlt id='trush'/>
            </button>
          </div>
        {/* </div> */}
    </li>
  )
}

export default Item