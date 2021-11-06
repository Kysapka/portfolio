import React from 'react';
import style from './Remote.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {ProjectButton} from "../myprojects/myproject/MyProject";

export const Remote = () => {
    return (
        <div className={`${style.remoteBlock} global`}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                <ProjectButton text={"Hire me"}/>
                {/*<a href='#' className={style.remoteButton}>Нанять меня</a>*/}
            </div>
        </div>
    );
}