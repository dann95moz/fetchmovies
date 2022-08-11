import React, { useState } from 'react'

const Search = () => {
  const [query, setQuery] = useState("")
  const handleChange = (e) => { 
setQuery(e.target.value)}
  return (
    <div>
      <input
        type="text"
        name={query}
        value={query}
        onChange={(e)=>handleChange(e)}
    /> </div>
  )
}

export default Search