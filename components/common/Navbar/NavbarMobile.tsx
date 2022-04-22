import { FC } from "react"
import { NextPage } from "next"
import { FaHome } from "react-icons/fa"
import { IoCloseSharp } from "react-icons/io5"
import { ActiveLink, Divider } from "@components/ui"

import { closeNavbar, toggleNavbar } from "redux/store/navbarSlice"
import { useDispatch, useSelector } from "react-redux"

import styles from "./Navbar.module.css"

const NavbarMobile: FC = () => {
    const navLinks = [
        { title: 'Menu', path: "/menu" },
        { title: 'About Us', path: "/about" },
        { title: 'Contact', path: "/contact" }
    ]
    
    const dispatch = useDispatch();
    const isNavbarOpen = useSelector((state: any) => state.entities.navbar.isNavbarOpen)
    
    const handleCloseNavbar = (e: any) => {
        dispatch(closeNavbar({isNavbarOpen}))
    }
   
    return (
        <div className={ !isNavbarOpen
            ? `${styles.navMobile} ${styles['navMobile--close']}`
            : `${styles.navMobile} ${styles['navMobile--open']}`}>

            <span className={styles.nav__close} onClick={handleCloseNavbar}>
                <IoCloseSharp style={{color: "white", fontSize: "22px"}} />
            </span>
        
            <nav className={`${styles.nav__mobileView}`}>
                <ActiveLink activeClassName={styles['nav__link--active']} href="/">
                        <a className={`
                            ${styles['nav__link']} 
                            ${styles['nav__link--hover']} 
                        `}>
                            <FaHome style={{fontSize: "22px"}} />
                        </a>
                </ActiveLink>
                <Divider classType={styles.nav__divider} />
                {navLinks.map((link: any) => (
                    <div key={link.title}>
                        <ActiveLink activeClassName={styles['nav__link--active']} href={link.path}>
                            <a className={`
                                ${styles['nav__link']} 
                                ${styles['nav__link--hover']} 
                            `}>
                                {link.title}
                            </a>
                        </ActiveLink>
                        <Divider classType={styles.nav__divider} />
                    </div>
                   
                ))}   
            </nav>
        </div>
      
    )
}

export default NavbarMobile;






