import React from 'react'
import Greeting from '../components/Greeting'
import styles from './GreetingPage.module.css'

function GreetingPage() {
  return (
      <div className={styles.cont}>
          <Greeting/>
    </div>
  )
}

export default GreetingPage