import { FC, useEffect, useState } from 'react'
import * as IoIcons from 'react-icons/io5';
//import { loadStripe } from '@stripe/stripe-js';
import { useSelector, useDispatch } from 'react-redux'
import { closeSidebar } from 'redux/store/cartSidebarSlice';
import { calculateTotalTax, subtractTax, getTotalPrice, config } from '@framework/utilities'; 
import useAutoClose from '@components/Hooks/useAutoClose';
import CartItem  from '../CartItem'
import s from "./CartSidebar.module.css";

const CartSidebar: FC = () => {
  const [products, setProducts] = useState([] as any)
  const cart = useSelector((state: any) => state.entities.cart);
  const isSidebarOpen = useSelector((state: any) => state.entities.cartSidebar.isSidebarOpen)
  const dispatch = useDispatch();
  const [useClickOutside] = useAutoClose()

  useEffect(() => {
    const prod = [...cart.cart].map((product: any) => {
      const {quantity, price_id} = product;
      return {quantity: parseInt(quantity), price: price_id} 
    })

    setProducts(prod)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const lineItems = [...products]

  const totalPrice = getTotalPrice(cart); 

  //const url = '/api/checkout_sessions';

  //const checkoutHandler = () => handleCheckout(url, lineItems)

  // const handleCheckout = async () => {
  //   const STRIPE_PK: any = process.env.STRIPE_PUBLISHABLE_KEY
  //   //const stripePromise = loadStripe(STRIPE_PK)
  //   try {
  //         const {sessionId} = await fetch(url, {
  //           method: 'POST',
  //           mode: 'no-cors', // no-cors, *cors, same-origin
  //           //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //           credentials: 'same-origin', // include, *same-origin, omit
  //           headers: config.headers,
  //           body: JSON.stringify({
  //             lineItems
  //           }),
  //         }).then((res: any) => res.json())
        
  //         const stripe = await stripePromise;
        
  //         const { error }: any = await stripe?.redirectToCheckout({
  //           sessionId,
  //         })
  //       } catch (error) {
  //         console.log(error)
  //     }
  // }

  const closeCartSidebar = () => {
    dispatch(closeSidebar(isSidebarOpen))
  }

  const btnRef = useClickOutside(() => {
    dispatch(closeSidebar(isSidebarOpen))
  })

return (
    <div className={ 
      !isSidebarOpen || cart.cart.length < 1
      ? `${s.cartSideBar} ${s['cartSideBar--close']}`
      : `${s.cartSideBar} ${s['cartSideBar--open']}`
    } ref={btnRef}>
      <header className="px-4 pt-6 pb-4 sm:px-6">
        <div className="flex items-start justify-between space-x-3">
          <div className="h-7 flex items-center text-2xl">
            <button onClick={closeCartSidebar}><IoIcons.IoCloseSharp /></button>
          </div>
        </div>
      </header>
      <div className="px-4 sm:px-6 flex-1">
        <h2 className={s.cartSideBar__title}>
          Shopping cart
        </h2>
        <ul className="py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-accents-3 border-t border-accents-3">
          {cart.cart.map((product: any, index: any) => {
            return(
              <CartItem product={product} key={index} />
          )})}
        </ul>
      </div>
      <div className="flex-shrink-0 px-4 sm:px-6">
        <div className="border-t border-accents-3">
          <ul className={s.cartSideBar__priceDescript}>
            <li className="flex justify-between py-1">
              <span>Ex. VAT&#58;</span>
              <span>{subtractTax(totalPrice, 25)} KR</span> 
            </li>
            <li className="flex justify-between py-1">
              <span>VAT</span>
              <span>{calculateTotalTax(totalPrice, 25)} KR</span>
            </li>
          </ul>
          <div className="flex justify-between border-t border-accents-3 py-3 font-bold">
            <span className={s['cartSideBar__total-amount']}>Total&#58;</span>
            <span className={s['cartSideBar__total-amount']}>{totalPrice} KR</span>
          </div>
        </div>
        <div className="flex flex-col content-between py-3 mb-10">
          <button 
            className={`${s['cartSideBar__checkoutBtn']} ${s['cartSideBar__checkoutBtn--hover']}`} 
            role="link" 
            onClick={() => {}}>
              Go to payment
          </button> 
        
          <button 
            className={`${s['cartSideBar__buyMoreBtn']} ${s['cartSideBar__buyMoreBtn--hover']}`}  
            onClick={closeCartSidebar}>
              Shop more
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartSidebar


