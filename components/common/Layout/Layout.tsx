/* eslint-disable @next/next/no-sync-scripts */

import Head from "next/head"
import { FC, MutableRefObject, ReactNode, useEffect, useRef } from "react"

import Footer from '../Footer'
import Header from '../Header'
import CartSidebar from "@components/Cart/CartSidebar"
import NavbarMobile from "../Navbar/NavbarMobile"
import styles from "./Layout.module.css"

interface Props  {
    title: string;
    keywords: string;
    description: string;
    children: ReactNode | ReactNode[]
}

const Layout: FC <Props> = ({children, title, keywords, description}) => { //

    return (
        <div className={styles.stickyContainer}>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                {/* <script src="https://js.stripe.com/v3" /> */}
            </Head>
            <Header  />
            <NavbarMobile />
            <main className={styles.wrapper}>
                <CartSidebar />
                {children}
            </main>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Sushi House | We are open for take away',
    description: 'We make fresh Sushi for all occasions and deliver good quality and ingredients.',
    keywords: 'sushi, maki, tempura, sashimi, asian food'
}

export default Layout;



