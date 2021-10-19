import React from 'react';
import style from './MyProject.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

export const MyProject = (props: ProjectPropsType) => {
    return (
        <div className={style.projectContainer}>
            <div className={style.imageContainer}>
                <a href='#' className={style.projectButton}>Смотреть</a>
            </div>
            <h3>{props.title}</h3>
            <span className={style.projectDescription}>{props.description}</span>
        </div>
    );
}