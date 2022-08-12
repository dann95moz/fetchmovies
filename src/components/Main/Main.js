import axios from 'axios'
import React, { useState } from 'react'
import Content from '../Content/Content'
import Search from '../Search/Search'
import Title from '../Title/Title'
import styles from './Main.module.scss'
const Main = () => {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState(null)
    const getMoviesData = () => {
        axios.get(`http://www.omdbapi.com/?s=${query}&apikey=73157ade`)
        .then(response=>setResults(response.data.Search))
    }
  return (
      <div className={styles.container}>
          <Title />
          <Search
              query={query}
              setQuery={setQuery}
              onUserClick={getMoviesData}
              setResults={setResults } />
          <Content searchedMovies={results} />
      </div>
  )
}

export default Main