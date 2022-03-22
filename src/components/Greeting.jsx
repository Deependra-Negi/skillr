import React from 'react';
import styles from './Greeting.module.css';

function Greeting() {
  return (
    <div className={styles.cont}>
      <div className={styles.rocket}>
        <img src="rocket.png" alt="rocket"/>
      </div>
      <div className={styles.bottom}>
        <div><h2>Congratulations</h2></div>
        <div>
          <p>
            You have completed the quiz. Make sure to check
            your inbox for any future updates from the company.
          </p>
        </div>
        <div>
          <button>Continue to results</button>
        </div>
      </div>
    </div>
  )
}

export default Greeting