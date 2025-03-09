import React from 'react';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import styles from './Empower2.module.css';

const Empower2 = () => {
  return (
    <section className={styles.layout25}>
      <div className={styles.container}>
        <LeftColumn />
        <RightColumn />
      </div>
    </section>
  )
}

export default Empower2