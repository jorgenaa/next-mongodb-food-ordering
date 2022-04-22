import { FC } from 'react'
import { Text } from "@components/ui";
import { BsTelephone } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import s from "./ContactInfo.module.css"

const ContactInfo: FC = () => {
  return (
    <section className={s.contact__section}>
        <ul className={s.contact__list}>
            <li className={`${s['contact__listItem']}`}>
                <h3 className={`${s['contact__listTitle']}`}>
                    Opening hours&#58;
                </h3>
            </li>
            <li className={`${s['contact__listItem']}`}>
                <Text classType={""}>Mon &#8211; Fri 11&#58;00 AM -21&#58;00 PM</Text>
            </li>
            <li className={`${s['contact__listItem']}`}>
                <Text classType={""}> Sat &#8211; Sun 13&#58;00 PM -21&#58;00 PM</Text>
            </li>
            <li className={`${s['contact__listItem']}`}>
                <Text classType={""}>The kitchen closes 20&#58;45 PM every day.</Text>
                <Text classType={""}>Call before 20&#58;45 PM to place an order</Text>
            </li>
        </ul>
        <ul className={s.contact__list}>
            <li className={`${s['contact__listItem']}`}>
                <h3 className={`${s['contact__listTitle']}`}>
                    Address&#58;
                </h3>
            </li>
            <li className={`${s['contact__listItem']}`}>
                <Text classType={""}>Karl Johans gate</Text>
                <Text classType={""}>Norway, Oslo  0000</Text>
            </li>
            <li className={`${s['contact__listItem']}`}>
                <a href="tel: 22000000"><span className={s.contact__icon}><BsTelephone /></span><Text classType={s.contact__text}>00 00 00 00</Text></a>
            </li>
            <li className={`${s['contact__listItem']}`}>
                <a href = "mailto: fakeMailAdsress@hotmail.com">
                    <span className={s.contact__icon}>
                        <HiOutlineMail />
                    </span>
                    <Text classType={s.contact__text}>fakeMailAdsress@hotmail.com</Text>
                </a>
            </li>
            
        </ul>
    </section>
  )
}

export default ContactInfo;
