import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GrCart } from 'react-icons/gr'
import { FiMenu } from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux';
import { openSidebar } from "redux/store/cartSidebarSlice";
import { closeNavbar, toggleNavbar } from 'redux/store/navbarSlice';
import useAutoClose from '@components/Hooks/useAutoClose';
import { Navbar } from '..';
import styles from './Header.module.css'

const Header: FC = () => {
  let cart = useSelector((state: any) => state.entities.cart);
  const isSidebarOpen = useSelector((state: any) => state.entities.cartSidebar.isSidebarOpen)
  const isNavbarOpen = useSelector((state: any) => state.entities.navbar.isNavbarOpen)
  const dispatch = useDispatch();
  const [useClickOutside] = useAutoClose();

  let btnRef = useClickOutside(() => {
    dispatch(closeNavbar({isNavbarOpen}))
  })
  
  const showCartSidebar = () => {
    dispatch(openSidebar({isSidebarOpen}))
  }

  const handleToggleNavbar = () => {
    return dispatch(toggleNavbar({isNavbarOpen}))
  }

  return (
    <header className={styles.header}>
      <button className={styles.header__hamburger} onClick={handleToggleNavbar} ref={btnRef}>
          <FiMenu style={{color: "white", fontSize: "22px"}} />
      </button>
      <Link href="/">
          <a className={styles.header__link}>
            Logo
            {/* <Image
              src={"/logo.png"}
              alt="logo"
              width="40px"
              height="40px"
              className={styles.header__img}
            /> */}
          </a>
      </Link>
      <Navbar />
      {cart.cart.length < 1 ? (
        // <Link href="" passHref>
          <div className={styles.header__cart} >
            <div>
              <GrCart size="26px" className={styles.grIcon} />
            </div>
            <div className={styles.header__counter}>{cart.quantity}</div>
          </div>
        // </Link>
        ) : (
        // <Link href="/cart" passHref>
          <div className={styles.header__cart} onClick={showCartSidebar}>
            <div>
              <GrCart size="26px" className={styles.grIcon} />
            </div>
            <div className={styles.header__counter}>{cart.quantity }</div>
          </div>
        // </Link>
      )}
    </header>
  )};


export default Header;


