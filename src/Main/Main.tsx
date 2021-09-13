import React from 'react';
import styles from './Main.module.css';

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.text}>
                <span>Hi there</span>
                <h1>I am Artem</h1>
                <p>Frontend Developer.</p>
            </div>
            <div className={styles.photo}>photo</div>
        </div>
    );
};