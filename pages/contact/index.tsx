import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SubmitHandlerFunc } from '../../framework/common/types/form'
import Form from '@components/Form/Form'
import { Heading } from '@components/ui'
import * as ContactSection from '../../components/ContactSections'
import { Layout } from '../../components/common'
import s from './contact.module.css'

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
      <Heading title='Contact Us' classType={s.contact__heading} />
      <ToastContainer />
      <section className={s.contact__container}>
        <ContactSection.ContactInfo />
        <Form handleSubmit={handleSubmit} />
      </section>
      <ContactSection.ContactMap />
    </div>
  )
}

Contact.Layout = Layout

export default Contact
