import React, {useState} from 'react';
import styles from './Greeting.module.css';

function Greeting() {

  const [flag, setFlag] = useState(true)
  
  function handleClick() {
    setFlag(!flag);
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
    <>
      <div style={flag?obj1:obj2}>
        <div className={styles.cont}>
          <div className={styles.rocket}>
            <img src="rocket.png" alt="rocket"/>
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
        </div>
      </>
  )
}

export default Greeting