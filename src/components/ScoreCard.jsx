import React from 'react'
import styles from './ScoreCard.module.css'

function ScoreCard() {
  return (
    <>
      <div className={styles.cont}>
        <div>
          <div className={styles.upper}>
            <div>
              <img src="avatar.png" alt="avatar" />
            </div>
            <div>
              <img src="trophy.png" alt="trophy" />
            </div>
          </div>
          <div className={styles.textCont}>
            <h2>Kelvin Malone</h2>
            <p>Hooray! You have what it takes to be a Kickass Sales Ninja</p>
          </div>
        </div> 

        <div className={styles.bottomCont}>
          <div className={styles.scoreCont}>
            <div>
              <p>Overall Quiz Score</p>
              <h2>86%</h2>
            </div>
            <div>
              <img src="progress.png" alt="progress" />
              <span>🔥</span>
            </div>
          </div>
          <div className={styles.profileCont}>

          </div>
        </div>
      </div>
    </>
  )
}

export default ScoreCard