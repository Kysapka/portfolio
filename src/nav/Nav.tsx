import React from 'react';
import style from "./Nav.module.scss";

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="https://google.com" className={style.activeClass}>Main</a>
            <a href="https://google.com">Skills</a>
            <a href="https://google.com">Projects</a>
            <a href="https://google.com">Contacts</a>
        </div>
    );
};