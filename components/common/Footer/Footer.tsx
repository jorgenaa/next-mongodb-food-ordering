
import Link from 'next/link';
import { FC } from 'react'
import { AiFillFacebook } from "react-icons/ai"
import { Text } from '@components/ui'
import styles from './footer.module.css'

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <ul className={styles.footer__list}>
                    <li className={`${styles['footer__listItem']}`}>
                        <Text classType={''}>&copy; Copyright 2022</Text>
                    </li>
                    <li className={`${styles['footer__listItem']}`}>
                        <span className={styles.footer__span}>Webdesign by</span>
                        <Link href="https://www.webtailor.no/">
                            <a>Webtailor&#8228;no</a>
                        </Link>
                    </li>
                </ul>
                <ul className={styles.footer__list}>
                    <li className={`${styles['footer__listItem']} ${styles['footer__listItem--hover']}`}>
                        <Link href='/conditions/conditions' >
                            <a>Terms of sale</a>    
                        </Link>
                    </li>
                    <li className={`${styles['footer__listItem']} ${styles['footer__listItem--hover']}`}>
                        <Link href='/compliance/compliance'>
                            <a>Privacy statement</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.footer__container}>
                <ul className={styles.footer__list}>
                    <li className={`${styles['footer__listItem']}`}>
                        <h3 className={`${styles['footer__listTitle']}`}>
                            Opening hours&#58;
                        </h3>
                    </li>
                    <li className={`${styles['footer__listItem']}`}>
                        <Text classType={''}>Mon &#8211; Fri 11&#58;00 AM -21&#58;00 PM</Text>
                    </li>
                    <li className={`${styles['footer__listItem']}`}>
                        <Text classType={''}> Sat &#8211; Sun 13&#58;00 PM -21&#58;00 PM</Text>
                    </li>
                    <li>
                        <Text classType={''}>The kitchen closes 20&#58;45 PM every day.</Text>
                        <Text classType={''}>Call us before 20&#58;45 PM to place an order</Text>
                    </li>
                </ul>
                <ul className={styles.footer__list}>
                    <li className={`${styles['footer__listItem']}`}>
                        <h3 className={`${styles['footer__listTitle']}`}>
                            Address&#58;
                        </h3>
                    </li>
                    <li className={`${styles['footer__listItem']}`}>
                        <Text classType={''}>Karl Johans gate</Text>
                        <Text classType={''}>Oslo 0000</Text>
                        <Text classType={''}>Norway</Text>
                    </li>
                    <li className={`${styles['footer__listItem']}`}>
                        <Link href="https://www.facebook.com">
                            <a>
                                <AiFillFacebook style={{fontSize: "2rem"}} />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;