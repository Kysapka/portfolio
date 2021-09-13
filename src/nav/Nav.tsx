import React from 'react';
import styles from "./Nav.module.css";

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href="https://google.com">Главная</a>
            <a href="https://google.com">Скилы</a>
            <a href="https://google.com">Проекты</a>
            <a href="https://google.com">Контакты</a>
        </div>
    );
};