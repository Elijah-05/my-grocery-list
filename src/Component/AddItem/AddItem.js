import React from 'react'
import { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'
import './addItem.css'

function AddItem({ newItem, newPrice, quantity, setNewItem, setNewPrice, setQuantity, handleSubmit }) {
    const itemName = useRef()

  return (
    <section className='add-item-section'>
        <h3 className='head'>Add Item</h3>
        <form action='' className='add-item-form' onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Add Item'
                ref={itemName}
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                required
            />
            <div className='price-add'>
                <input 
                    type='number'
                    placeholder='Item Price'
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    required
                />
                <input 
                    type='number'
                    placeholder='Kg/Pcs'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button className='add'
                    type='submit'
                    onClick={() => itemName.current.focus()}
                >
                    <FaPlus className='add-icon'/>
                </button>
            </div>
        </form>
    </section>
  )
}

export default AddItem