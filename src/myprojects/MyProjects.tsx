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
        <div className={`${style.projectsBlock} global`} >
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
               <Title text={"Projects"}/>
                <div className={style.projects}>
                    <MyProject style={social}  title={'Social Network'} description={'Social network: research project, sharpening skills'}/>
                    <MyProject style={todo} title={'Todolist'} description={'To do list for every day on the week'}/>
                    <MyProject style={webChat} title={'WebChat'} description={'Web chat with use firebase'}/>
                </div>
            </div>
        </div>
    );
}