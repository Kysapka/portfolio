import React from 'react';
import style from './MyProjects.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {MyProject} from "./myproject/MyProject";
import {Title} from "../common/components/title/Title";



export const MyProjects = () => {

    // const social = {
    //     backgroundImage: 'url(' + imgURL + ')'
    // };

    return (
        <div className={style.projectsBlock} >
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
               <Title text={"Projects"}/>
                <div className={style.projects}>
                    <MyProject title={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem, impedit iure magni minus officiis placeat sed?'}/>
                    <MyProject title={'Todolist'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem, impedit iure...'}/>
                    {/*<MyProject title={'WebChat'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem, impedit iure...'}/>*/}
                </div>
            </div>
        </div>
    );
}