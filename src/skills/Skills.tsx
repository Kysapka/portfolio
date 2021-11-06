import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import ReactImage from '../assets/image/react-icon.af74c0ff.svg'
import HtmlImage from '../assets/image/html-icon.285bdcd4.svg'
import JSImage from '../assets/image/js-icon.6a563750.svg'

export const Skills = () => {
    const htmlImage = {
        backgroundImage: `url(${HtmlImage})`,
    };
    const jsImage = {
        backgroundImage: `url(${JSImage})`
    };
    const reactImg = {
        backgroundImage: `url(${ReactImage})`
    };

    return (
        <div className={`${style.skillsBlock} global`}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill style={reactImg} title={'React / Redux'} description={'A most populas JavaScript library for building user interfaces.'}/>
                    <Skill style={htmlImage} title={'HTML/ CSS'} description={'Skills and knowledge of layout using preprocessors such as SCSS/SASS'}/>
                    <Skill style={jsImage} title={'JS / Typescript'} description={'Using a strongly typed language to speed up development'}/>
                </div>
            </div>
        </div>
    );
};

