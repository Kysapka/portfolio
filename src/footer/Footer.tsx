import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Крючков Артем</h2>
                <div className={style.footerContent}>
                    <div className={style.footerMini}></div>
                    <div className={style.footerMini}></div>
                    <div className={style.footerMini}></div>
                    <div className={style.footerMini}></div>
                </div>
                <span className={style.copyRight}>© Все права защищены</span>
            </div>
        </div>
    );
}