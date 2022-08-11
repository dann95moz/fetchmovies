import React from 'react'
import Content from '../Content/Content'
import Search from '../Search/Search'
import Title from '../Title/Title'
import styles from './Main.module.scss'
const Main = () => {
  return (
      <div className={styles.container}>
          <Title />
          <Search />
          <Content/>
      </div>
  )
}

export default Main