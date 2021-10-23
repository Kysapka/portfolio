import React from 'react';
import style from './MyProjects.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {MyProject} from "./myproject/MyProject";
import {Title} from "../common/components/title/Title";
import socialImage from '../assets/image/social.jpg'
import todoImage from '../assets/image/todo.jpg'
import webChatImage from '../assets/image/webchat.jpg'



export const MyProjects = () => {

    const social = {
        backgroundImage: `url(${socialImage})`
    };
    const todo = {
        backgroundImage: `url(${todoImage})`
    };
    const webChat = {
        backgroundImage: `url(${webChatImage})`
    };

    return (
        <div className={style.projectsBlock} >
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
               <Title text={"Projects"}/>
                <div className={style.projects}>
                    <MyProject style={social}  title={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetupsum dolor sit psum dolor sit psum dolor sit r adipisicing elit. Alias dolorem, impedit iure magni minus officiis placeat sed?'}/>
                    <MyProject style={todo} title={'Todolist'} description={'Lorem ipsum dolor sit amet,  sit amet, consectetur adipisicing elit. Alias dolorem, impedit iure...'}/>
                    <MyProject style={webChat} title={'WebChat'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem, impedit iure...'}/>
                </div>
            </div>
        </div>
    );
}