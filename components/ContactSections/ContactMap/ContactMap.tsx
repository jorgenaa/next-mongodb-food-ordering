import { FC } from 'react'
import { googleMapUrl } from "@framework/utilities";
import styles from './ContactMap.module.css'

const ContactMap: FC = () => {
  return (
    <section className={styles.contactMmap}>
      <iframe src={googleMapUrl} width='100%' height='350' loading='lazy' />
    </section>
  )
}

export default ContactMap
