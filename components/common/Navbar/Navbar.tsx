import { NextPage } from "next"
import { FaHome } from "react-icons/fa"
import { ActiveLink } from "@components/ui"
import { closeNavbar } from "redux/store/navbarSlice"
import { useDispatch, useSelector } from "react-redux"

import styles from "./Navbar.module.css"

const Navbar: NextPage = () => {
    const navLinks = [
        { title: 'Menu', path: "/menu" },
        { title: 'About Us', path: "/about" },
        { title: 'Contact', path: "/contact" }
    ]

    const dispatch = useDispatch();
    const isNavbarOpen = useSelector((state: any) => state.entities.navbar.isNavbarOpen)

    const handleCloseNavbar = () => {
        dispatch(closeNavbar({isNavbarOpen}))
        console.log("clicked", isNavbarOpen)
      }
    
    return (
        <>
      
        <nav className={styles.nav}>
              <ActiveLink activeClassName={styles['nav__link--active']} href="/">
                    <a className={`
                        ${styles['nav__link']} 
                        ${styles['nav__link--hover']} 
                    `}>
                        <FaHome style={{fontSize: "22px"}} />
                    </a>
                </ActiveLink>
                {navLinks.map((link: any) => (
                <ActiveLink key={link.title} activeClassName={styles['nav__link--active']} href={link.path}>
                    <a className={`
                        ${styles['nav__link']} 
                        ${styles['nav__link--hover']} 
                    `}>
                        {link.title}
                    </a>
                </ActiveLink>
            ))}   
        </nav>
        </>
      
    )
}

export default Navbar;


