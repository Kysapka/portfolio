import React from 'react';
import style from './MyProjects.module.css'
import styleContainer from "../common/Container.module.css";
import {MyProject} from "./myproject/MyProject";



export const MyProjects = () => {
    return (
        <div className={style.projectsBlock} >
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <MyProject title={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem, impedit iure magni minus officiis placeat sed?'}/>
                    <MyProject title={'Todolist'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem, impedit iure...'}/>
                    <MyProject title={'WebChat'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem, impedit iure...'}/>
                </div>
            </div>
        </div>
    );
}