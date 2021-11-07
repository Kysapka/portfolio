import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {ProjectButton} from "../myprojects/myproject/MyProject";
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={`${style.contactsBlock} global`}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>

                {/*<h2 className={style.title}>Контакты</h2>*/}
                <Title text={"Contacts"} />

                <form className={style.contactForm}>
                    <input type={"text"} placeholder="Enter your name"/>
                    <input type={"text"} placeholder="Enter your e-mail"/>
                    <textarea style={{resize: "none"}} placeholder="Enter your message"/>
                    <ProjectButton text={"Send message"}/>
                {/*<button type={"submit"} className={style.contactsButton}>Отправить</button>*/}
                </form>
            </div>
        </div>
    );
}