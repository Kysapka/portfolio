import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.contactForm}>
                    <input type={"text"} />
                    <input type={"text"} />
                    <textarea style={{resize: "none"}}/>
                <button type={"submit"} className={style.contactsButton}>Отправить</button>
                </form>
            </div>
        </div>
    );
}