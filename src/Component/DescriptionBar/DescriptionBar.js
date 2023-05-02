import React from 'react'
import './descriptionBar.css'

function DescriptionBar() {
  return (
    <section className='description-bar'>
        <div className='description-container'>
            <p className='item-name'>Item Name</p>
            <div className='qty-price'>
                <p className=''>QTY</p>
                <p className=''>Price</p>
                <p className=''>Remove</p>
            </div>
        </div>
    </section>
  )
}

export default DescriptionBar