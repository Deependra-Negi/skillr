import React, {useState} from 'react';
import styles from './Greeting.module.css';
import ScoreCard from './ScoreCard';

function Greeting() {

  const [flag, setFlag] = useState(true)
  const [Change, setChange] = useState(false)
  
  function handleClick() {
    setFlag(!flag);
    setTimeout(()=>{setChange(true)},1000)
  }
  let obj2 = {
    opacity: "0",
    transform: "scale(0.2)",
    transition: " transform 1s, opacity 1s"
}
  let obj1 = {
    opacity : "1"
}

  return (
    <>{Change ? <ScoreCard /> :
      <div style={flag ? obj1 : obj2}>
        <div className={styles.cont}>
          <div className={styles.rocket}>
            <img src="rocket.png" alt="rocket" />
          </div>
          <div className={styles.bottom}>
            <div><h2>Congratulations!</h2></div>
            <div>
              <p>
                You have completed the quiz. Make sure to check
                your inbox for any future updates from the company.
              </p>
            </div>
            <div>
              <button onClick={handleClick}>Continue to results</button>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default Greeting