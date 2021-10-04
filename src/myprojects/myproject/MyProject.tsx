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
            <div className={style.projectTitle}>{props.title}</div>
            <div className={style.projectDescription}>{props.description}</div>
        </div>
    );
}