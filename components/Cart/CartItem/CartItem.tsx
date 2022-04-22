import { useEffect } from 'react';
import * as IoIcons from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import cartSidebarSlice from 'redux/store/cartSidebarSlice';
import {incrementQuantity, decrementQuantity, removeFromCart } from 'redux/store/cartSlice'; 
//import { saveCartItems, getConvertedExistingCartItems, getExistingQuantity, saveQuantity } from '@framework/utilities';
import s from "./CartItem.module.css";

const CartItem = ({product}: any) => {
    const dispatch = useDispatch();
   
    const cart = useSelector((state: any) => state.entities.cart);

    const handleRemoveProduct = () => {
        dispatch(removeFromCart(product._id)) 
    }

    const incrementHandler = () => {
        dispatch(incrementQuantity(product._id)) 
    }

    const decrementHandler = () => {
        dispatch(decrementQuantity(product._id)) 
    }

    return (
        <div>
            <div className={s.productItem__container}>
                <header className="flex justify-between mb-4">
                    <h3 className={s.productItem__title}>{product?.title}</h3>
                    <div>
                        <h5 className={s.productItem__price}>
                            {/* {cart.total} KR */}
                            {product.price * product.quantity} KR
                        </h5>
                        <p className={s.productItem__quantity}>{product.quantity} Stk</p>
                    </div>
                </header>
                <div className="flex justify-between">
                    <div className={s.productItem__counter}>
                        <div className={`${s['productItem__btn-container']}`}>
                            <button className={`${s['product__incAndDec-btn']}`} onClick={decrementHandler}>&minus;</button> 
                        </div>
                        <div className={s.productItem__quantity}>{product.quantity}</div>
                        <div className={`${s['productItem__btn-container']}`}>
                            <button className={`${s['productItem__incAndDec-btn']}`} onClick={incrementHandler}>&#43;</button> 
                        </div>
                    </div>
                    <IoIcons.IoTrashBin 
                        className={`${s.productItem__remove} ${s['productItem__remove--hover']}`} 
                        onClick={handleRemoveProduct}
                    >
                        Remove product
                    </IoIcons.IoTrashBin>
                </div>
              
            </div>
        </div>
    )
}

export default CartItem
