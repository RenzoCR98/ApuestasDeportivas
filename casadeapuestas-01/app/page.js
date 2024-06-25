import React from 'react';
import NavBar from './components/NavBar';
import styles from './page.module.css';

const Page=()=>{
  return(
    <>
      <NavBar/>
      <div className={styles.bannerContainer}>
        <img src="/images/Apuestas_banner1.png" alt="Banner" className={styles.bannerImage}/>
      </div>
      <div className={styles.content}>
      <h2 className={styles.title}>Deportes Populares</h2>
        <div className={styles.sportsContainer}>
        <div className={`${styles.sportBox} ${styles.futbol}`}>Futbol</div>
          <div className={`${styles.sportBox} ${styles.voleyball}`}>Voley</div>
          <div className={`${styles.sportBox} ${styles.tenis}`}>Tenis</div>
          <div className={`${styles.sportBox} ${styles.baloncesto}`}>Basketball</div>
        </div>
      </div>
    </>
  );
};

export default Page;