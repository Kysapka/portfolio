import React from 'react';
import style from './Remote.module.css'
import styleContainer from "../common/Container.module.css";

export const Remote = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                <a href='#' className={style.remoteButton}>Нанять меня</a>
            </div>
        </div>
    );
}