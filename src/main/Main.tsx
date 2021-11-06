import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import photoImg from '../assets/image/photo.png'

const photo = {
    backgroundImage: `url(${photoImg})`
};

export const Main = () => {
    return (
        <div className={`${style.mainBlock} global`}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi there,</span>
                    <h1>I am Artem Kryuchkov</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={style.photo} style={photo}></div>
            </div>
        </div>
    );
};