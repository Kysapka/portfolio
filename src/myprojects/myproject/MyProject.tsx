import React from 'react';
import style from './MyProject.module.scss'

type ProjectPropsType = {
    style?: {
        backgroundImage: string
    }
    title: string
    description: string
}

export const MyProject = (props: ProjectPropsType) => {
    return (
        <div className={style.projectContainer}>
            <div className={style.imageContainer} style={props.style}>
                <a href='#' className={style.projectButton}>Смотреть</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.projectDescription}>{props.description}</span>
            </div>
        </div>
    );
}