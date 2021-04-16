import React from 'react';
import robotsData from 'mock/data.json';
import Robot from 'components/Robot';
import styles from 'App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {robotsData.map((node) => {
          return (
            <Robot
              key={node.id}
              id={node.id}
              name={node.name}
              email={node.email}
            ></Robot>
          );
        })}
      </div>
    </div>
  );
}

export default App;
