import React from 'react';
import style from "./Nav.module.css";

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="https://google.com">Главная</a>
            <a href="https://google.com">Скилы</a>
            <a href="https://google.com">Проекты</a>
            <a href="https://google.com">Контакты</a>
        </div>
    );
};