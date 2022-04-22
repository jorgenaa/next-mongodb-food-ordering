import { FC, useState } from "react";
import { HandleChange, OnChangeHandlerEvent, OnSubmittHandler, SubmitHandlerFunc } from "@common/types/form";

import s from "./Form.module.css"

const Form: FC<any> = ({handleSubmit}) => {
    const initialInputValues = { name: '', email: '', subject: "", message: '' }
    const [state, setState] = useState(initialInputValues);
   
    const handleChange: HandleChange = (event: OnChangeHandlerEvent) => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    }

    const onSubmitHandler = (e: OnSubmittHandler) => {
        e.preventDefault(); 
        handleSubmit(state, () => setState(initialInputValues))
    }

  return (
    <form className={s.form} onSubmit={onSubmitHandler}> 
        <h2 className={s.form__title}>Send us a message</h2>
        <div className={s.form__element}>
            <label className={s.form__label}>Name&#58;</label>    
            <input 
                className={s.form__input} 
                name="name" 
                id="name" 
                value={state.name} 
                onChange={(e) => handleChange(e)} 
            />
        </div>
        <div className={s.form__element}>
            <label className={s.form__label}>Email&#58;</label>
            <input 
                className={s.form__input} 
                name="email" 
                id="email" 
                value={state.email}  
                onChange={(e) => handleChange(e)} 
            />
        </div>
        <div className={s.form__element}>
            <label className={s.form__label}>Subject&#58;</label>
            <input 
                className={s.form__input} 
                name="subject" 
                id="subject" 
                value={state.subject}  
                onChange={(e) => handleChange(e)} 
            />
        </div>
        <div className={s.form__element}>
            <label className={s.form__label}>Message&#58;</label>
            <textarea 
                className={s.form__textArea} 
                name="message" 
                id="message" 
                value={state.message} 
                onChange={(e) => handleChange(e)} 
            />
        </div>
        <div className={s.form__element}>
            <label className={s.form__label}></label>
            <button 
                className={`${s['form__btn']} ${s['form__btn--hover']}`} 
                type="submit">
                Send
            </button>
        </div>
      </form>
  )
}

export default Form;


