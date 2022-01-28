import React from 'react';
import style from './MyProject.module.scss'
import '../../common/styles/Global.scss'
import {ProjectButton} from "../../common/components/button/Button";

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
                <ProjectButton text={"Смотреть"}/>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.projectDescription}>{props.description}</span>
            </div>
        </div>
    );
}
