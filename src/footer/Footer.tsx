import React from 'react';
import style from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <div className={`${style.footerBlock} global`}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Крючков Артем</h2>
                <div className={style.footerContent}>
                    <FontAwesomeIcon icon={faGithub} size="4x"/>
                    <FontAwesomeIcon icon={faLinkedin} size="4x" />
                    <FontAwesomeIcon icon={faTelegram} size="4x" />
                    <FontAwesomeIcon icon={faInstagram} size="4x" className={style.footerMini}/>

                    {/*<div className={style.footerMini}></div>*/}
                    {/*<div className={style.footerMini}></div>*/}
                    {/*<div className={style.footerMini}></div>*/}
                    {/*<div className={style.footerMini}></div>*/}


                </div>
                <span className={style.copyRight}>© Все права защищены</span>
            </div>
        </div>
    );
}