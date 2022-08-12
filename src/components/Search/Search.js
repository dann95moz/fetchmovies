import React, { useState } from 'react'
import styles from './Search.module.scss'
const Search = ({ query, setQuery, onUserClick, setResults}) => {
 
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const handleClear = (e) => {
    setQuery('')
    setResults(null)
    
  }
  
  return (
    <div className={styles.container}>
      <input
        type="text"
        name={query}
        value={query}
        onChange={(e)=>handleChange(e)}
      />
      <button onClick={onUserClick}>search</button>
      <button onClick={handleClear}>clear</button>

    </div>
  )
}

export default Search