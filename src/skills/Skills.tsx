import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
// import "../common/styles/Global.scss"

export const Skills = () => {
    return (
        <div className={`${style.skillsBlock} global`}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem, impedit iure magni minus officiis placeat sed?'}/>
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem, impedit iure...'}/>
                    <Skill title={'REACT'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </div>
            </div>
        </div>
    );
};

