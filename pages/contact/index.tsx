import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { SubmitHandlerFunc } from "../../framework/common/types/form"
import { googleMapUrl } from "@framework/utilities";
import Form from "@components/Form/Form";
import { ContactInfo, Heading } from "@components/ui";
import { Layout } from "../../components/common";
import s from "./contact.module.css"

const Contact = () => {
   
    const handleSubmit: SubmitHandlerFunc = async (state, callback) => { 
     
        const inputValue = JSON.stringify({
            email: state.email,
            name: state.name,
            subject: state.subject,
            message: state.message,
        })
    
        callback() 
    }

    return (
        <div className={s.contact}>
            <Heading title="Contact Us" classType={s.contact__heading} />
            <ToastContainer />
            <section className={s.contact__container}>
                <ContactInfo/>
                <Form handleSubmit={handleSubmit} />
            </section>
            <section className={s.contact__map}>
                <iframe src={googleMapUrl} width="100%" height="350" loading="lazy" />
            </section>
           
        </div>
    )
}

Contact.Layout = Layout;

export default Contact;
