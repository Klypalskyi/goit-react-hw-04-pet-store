import React from 'react';
import styles from './HomePage.module.css';
import Cat from '../Cat/Cat';

const HomePage = () => (
  <div className="mainstyle">
    <div className={`${styles.homePage__container}`}>
      <h1 className={styles.homePage__title}>Welcome to Paws online store</h1>
    </div>
    <Cat />
  </div>
);

export default HomePage;
