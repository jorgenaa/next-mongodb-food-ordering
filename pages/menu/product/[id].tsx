import { useState } from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Params } from 'next/dist/server/router';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring';

import * as IoIcons from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from 'redux/store/cartSlice';

import { findeOneId, incrementHandler, decrementHandler, calculateTotal, url } from '@framework/utilities';
import dbConnect from '@framework/dbConnect';
import productModel from "../../../framework/models/Product"
import { openSidebar } from 'redux/store/cartSidebarSlice';
import { Layout } from '@components/common';
//import { Text } from '@components/ui';
import s from "./product.module.css"
import axios from 'axios';

// interface ProductProps {
//   products: Product | any
// }

// interface Params extends ParsedUrlQuery {
//   id: string;
// }
const ProductPage = ({product}: InferGetStaticPropsType<typeof getStaticProps> ) => {
    const router = useRouter()
    const cart = useSelector((state: any) => state.entities.cart);
    const isSidebarOpen = useSelector((state: any) => state.entities.cartSidebar.isSidebarOpen)
    const placeholderImage = "/product-image-placeholder.svg"; 
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
      if(qty === 0) {
        return
      } else {
        dispatch(addToCart({...product, quantity: qty}))
        dispatch(openSidebar({isSidebarOpen}))
      }
    };    

    const total = calculateTotal(product?.price, qty)

    return ( 
        <div>
          <div className={s.product}>
            <div className={s['product__img-container']}>
              <Image 
                className={s.product__img} 
                src={placeholderImage} 
                alt={product?.alt}
                width="500px" 
                height="500px" 
                layout="responsive" 
                objectFit='contain'
              />
            </div>
            <div className={s.product__details}>
              <h1 className={s.product__title}>{product?.title}</h1>
              <p className={s.product__price}>KR {product?.price}</p>
              <p className={s.product__desc}>{product?.description}</p>
              <div className={`${s['product__cta-container']}`}>
                <div className={s['product__qty-controller']}>
                  <button className={`${s['product__btn-circle']}`} onClick={() => decrementHandler(setQty, qty)}>
                    <span>&minus;</span> 
                  </button>
                  <div className={s.product__quantity}>{qty}</div>
                  <button className={`${s['product__btn-circle']}`} onClick={() => incrementHandler(setQty, qty)}>
                    <span>&#43;</span> 
                  </button>
                </div>
               
                <button 
                  className={
                    !cart.productExists 
                    ? `${s.product__btn} ${s['product__btn--green']} ${s['product__btn--hover']}`
                    : `${s.product__btn} ${s['product__btn--grey']} ${s['product__btn--exist']}`
                  } 
                  onClick={handleAddToCart}>
                  Add &#40;{total}&#41;
                </button>
              </div>
            </div>
          </div>
          <div className={s.product__goBack}>
            <button 
              className={`${s.product__btn} ${s['product__btn--black']} ${s['product__btn--rounded']} ${s['product__btn--hover']}`} 
              onClick={() => router.back()}>
                <span className={s.product__icon}>
                  <IoIcons.IoChevronBackSharp />
                </span> 
                Go back
            </button>
          </div> 
      </div> 
    )};

ProductPage.Layout = Layout;

export const getStaticPaths: GetStaticPaths<Params> | any = async () => {
        //const product = await fetchUrl(`${url}/api/products/product`) //http://localhost:3000/api/products/product
        // const res = await fetch(`${url}/api/products`)
        // const product = await res.json();
        dbConnect()
        const res = await productModel.find()
        const product = await JSON.parse(JSON.stringify(res))

        const paths = product.map((product: any) => ({
            params: {id: product._id.toString()}
        }));
          
        return { paths, fallback: true };
    } 
  
  
  export const getStaticProps: GetStaticProps = async ({params}: ParsedUrlQuery | undefined | any) => {
    
    //const res = await fetchUrl(`${url}/api/products`) //http://localhost:3000/api/products
    // const res = await fetch(`${url}/api/products`)
    // const products = await res.json();
    dbConnect()
    const res = await productModel.find()
    const products = await JSON.parse(JSON.stringify(res))
    let product = findeOneId(products, params.id)
    
    return {
        props: {
            product: product || null,
        },
        revalidate: 1
    };
  }

// export const getServerSideProps: GetServerSideProps = async ({params: { id }}: any ) => {
//     const res = await fetchUrl(`http://localhost:3000/api/products`)
//     let product = findeOneId(res, id)
    
//     return {
//       props: {
//             product
//         }
//     };
//   };

export default ProductPage;



