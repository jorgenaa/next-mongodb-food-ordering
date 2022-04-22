//import axios from 'axios'
//import { loadStripe } from '@stripe/stripe-js';
import { Dispatch, SetStateAction } from 'react';
//import { STRIPE_PK } from './stripe-utils/stripe-constants';

export const config = {
  headers: {
      "Content-Type": "application/json",
  },
}

//export const fetcher = (url: string) => axios.get(url).then((res: any) => res.data);

// export const fetchUrl = async (url: string) => {
//   try {
//     const data: any = fetch(url, {
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     })
//     const products = await data.json();
//     return products
//   } catch (error) {
//     console.log(error)
//   }
// }
// export const fetchUrl = (url: string) => {
//     try {
//       const data = axios.get(url).then((res: any) => res.data);

//       return data
//     } catch (err: any) {
//       // if (err instanceof Error) {
//       //   throw new Error(err.message)
//       // }
//       throw err.response.data
//     }
//   }

// export const postUrl = (url: string, data: string, headers: any) => {
//   return axios.post(url, data, headers).then((res: any) => res.data);
// } 


type handleCheckoutFunc = (url: string, lineItems: object) => Promise<void> 

// export const handleCheckout: handleCheckoutFunc = async (url, lineItems) => {
//   const STRIPE_PK: any = process.env.STRIPE_PUBLISHABLE_KEY
//   const stripePromise = loadStripe(STRIPE_PK)

//   try {
//       const {sessionId} = await fetch(url, {
//         method: 'POST',
//         mode: 'no-cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: config.headers,
//         body: JSON.stringify({
//           lineItems
//         }),
//       }).then((res: any) => res.json())
    
//       const stripe = await stripePromise;
    
//       const { error }: any = await stripe?.redirectToCheckout({
//         sessionId,
//       })
//     } catch (error) {
//         console.log(error)
//   }
// }


export const findeOneSlug = (props: any, searchParam: any) => props.find((prod: any) => prod.slug === searchParam); 

export const findeOneId = (props: any, searchParam: any) => props.find((prod: any) => prod._id === searchParam); 

export const getAllProductsFromOneCategory = (props: any, searchParam: any) => props.filter((prod: any) => prod.slug === searchParam);

export const getUniqueSlugs = ((array: any, key: any) => [...new Map(array.map((item: any) => [item[key], item])).values()])

export const subtractTax = (amount: number, prosentage: number) => {
  const totalTax = amount * (prosentage/ 100)
  const result = amount - totalTax
  return result
}

export const calculateTotalTax = (amount: number, prosentage: number) => {
  const res = prosentage * (amount/100)  
  
  return Math.round(res)
}

export const getTotalPrice = (cart: any) => {
  return cart.cart.reduce(
    (accumulator: number, item: { quantity: number; price: number; }) => accumulator + item.quantity * item.price,
    0
  );
};

export const incrementHandler = (setQty: Dispatch<SetStateAction<number>>, qty: number) => {
  setQty(qty + 1)
}

export const decrementHandler = (setQty: Dispatch<SetStateAction<number>>, qty: number) => {
  qty === 0 ? setQty(0) : setQty(qty - 1) 
}

export const calculateTotal = (product: number, qty: number) => {
  return product * qty
}

export const googleMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.1473669467023!2d10.73907991627576!3d59.91310158186694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e7d5226496b%3A0x308a314c2d286af9!2sKarl%20Johans%20gate%2C%20Oslo!5e0!3m2!1sen!2sno!4v1650137058258!5m2!1sen!2sno"

let dev = process.env.NODE_ENV !== 'production';
export const url = dev ? process.env.DEV_URL: process.env.PROD_URL