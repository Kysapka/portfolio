import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import {Title} from "../common/components/title/Title";
import {useForm} from 'react-hook-form';
import emailjs from 'emailjs-com';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

export const Contacts = () => {

    interface IFormInputs {
        name: string;
        email: string;
        message: string;
    }

    const schema = yup.object({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email').required('email is required'),
        message: yup.string().required('Message is required')
    }).required();

    let [notification, setNotification] = React.useState({flag: false, message: 'xxx'})

    const {register, handleSubmit,  formState: { errors }, setError} = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const onSubmitHandler =  (data: IFormInputs, e: any) => {
        emailjs.sendForm('service_gag1lwr', 'template_gy4co6o', e.target, 'user_hIeN5iRzerHb2xlKmzrAe')
            .then(result => {
                if (result.status === 200) {
                    e.target.reset()
                    setNotification({flag: true, message: 'The message was sent successfully. Thanks!'})
                    setTimeout(() => {
                        setNotification({flag: false, message: ''})
                    }, 5000)
                } else {
                    setError('name', {type: 'server', message: 'server error'});
                    setNotification({flag: true, message: 'Something went wrong:(The message was not sent'})
                    setTimeout(() => {
                        setNotification({flag: false, message: ''})
                    }, 5000)
                }
            })
            .catch(err => {
                setError('name', {type: 'server', message: 'server error'});
                setNotification({flag: true, message: 'Something went wrong:(The message was not sent'})
                setTimeout(() => {
                    setNotification({flag: false, message: ''})
                }, 5000)
            })
    }


    return (
        <div className={`${style.contactsBlock} global`}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>

                <Title text={"Contacts"} />


                <div className={style.messageSuccess} style={{opacity: notification.flag ? '1' : ''}}>
                    <span>{notification.message}</span>
                </div>

                <form onSubmit={handleSubmit(onSubmitHandler)} className={style.contactForm}>

                    <input
                        placeholder={'Name'}
                        {...register("name", )}
                    />
                    {errors.name && <span className={style.errorMessage}>{errors.name.message}</span>}

                    <input
                        placeholder={'Email'}
                        {...register("email", )}
                    />
                    {errors.email && <span className={style.errorMessage}>{errors.email.message}</span>}

                    <textarea
                        placeholder={'Message'}
                        style={{resize: "none"}}
                        {...register("message", )}

                    />
                    {errors.message && <span className={style.errorMessage}>{errors.message.message}</span>}
                    <button type='submit' className={'projectLink'}>Send message</button>
                </form>
            </div>
        </div>
    );
}