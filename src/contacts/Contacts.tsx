import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.contactForm}>
                    <input />
                    <input />
                    <textarea style={{resize: "none"}}/>
                </form>
                <a href='#' className={style.contactsButton}>Отправить</a>
            </div>
        </div>
    );
}