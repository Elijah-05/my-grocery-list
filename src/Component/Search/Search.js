import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './search.css'

function Search({ search, setSearch }) {
    
  return (
    <form action='' className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <div className='search-container'>
          <input id='search-input'
              type='text'
              placeholder='Search Item'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className='search-icon'/>
        </div>
    </form>
  )
}

export default Search