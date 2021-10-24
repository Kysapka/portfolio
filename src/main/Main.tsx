import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'
import '../common/styles/Global.css'


export const Main = () => {
    return (
        <div className={`${style.mainBlock} global`}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>I am Artem</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};