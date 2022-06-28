import { FC } from 'react'
import { Text } from "@components/ui";
import { BsTelephone } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { Heading } from '@sajari/react-components';
import s from "./ContactInfo.module.css"

const ContactInfo: FC = () => {
  return (
    <section className={s.contact__section}>
        <ul className={s.contact__list}>
            <li className={`${s['contact__listItem']}`}>
                <h3 className={`${s['contact__listTitle']}`}>
                    Åpningstider&#58;
                </h3>
            </li>
            <li className={`${s['contact__listItem']}`}>
                <Text classType={""}>Man &#8211; Fre kl. 11&#58;00-21&#58;00</Text>
            </li>
            <li className={`${s['contact__listItem']}`}>
                <Text classType={""}> Lør &#8211; Søn kl. 13&#58;00-21&#58;00</Text>
            </li>
            <li className={`${s['contact__listItem']}`}>
                <Text classType={""}>Kjøkkenet stenger kl. 20&#58;45 alle dager.</Text>
                <Text classType={""}>Ring før kl. 20&#58;45 for å legge en bestilling</Text>
            </li>
        </ul>
        <ul className={s.contact__list}>
            <li className={`${s['contact__listItem']}`}>
                <h3 className={`${s['contact__listTitle']}`}>
                    Addresse&#58;
                </h3>
            </li>
            <li className={`${s['contact__listItem']}`}>
                <Text classType={""}>Ullevålsveien 95 A</Text>
                <Text classType={""}>Norway, Oslo 0359</Text>
            </li>
            <li className={`${s['contact__listItem']}`}>
                <a href="tel: 22960096"><span className={s.contact__icon}><BsTelephone /></span><Text classType={s.contact__text}>22 96 00 96</Text></a>
            </li>
            <li className={`${s['contact__listItem']}`}>
                <a href = "mailto: Adamstuensushi@hotmail.com">
                    <span className={s.contact__icon}>
                        <HiOutlineMail />
                    </span>
                    <Text classType={s.contact__text}>Adamstuensushi@hotmail.com</Text>
                </a>
            </li>
            
        </ul>
    </section>
  )
}

export default ContactInfo;
