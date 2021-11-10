import React from 'react';
import style from './Remote.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {ProjectButton} from "../common/components/button/Button";


export const Remote = () => {
    return (
        <div className={`${style.remoteBlock} global`}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <h2 className={style.title}>I am considering options for full-time remote work</h2>
                <ProjectButton text={"Hire me"}/>
            </div>
        </div>
    );
}