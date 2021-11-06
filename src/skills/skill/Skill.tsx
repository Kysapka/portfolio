import React from 'react';
import style from './Skill.module.scss';

type SkillPropsType = {
    style?: {
        backgroundImage: string
    }
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}></div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};