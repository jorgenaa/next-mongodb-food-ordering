import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { findeOneId, googleMapUrl, url } from '@framework/utilities';
import dbConnect from '@framework/dbConnect';
import productModel from "../framework/models/Product"

import Divider from '../components/ui/Divider'
import { Layout } from '../components/common'
import ProductCard from '../components/Product/ProductCard/ProductCard'
import { Button, ContactInfo, Grid, Hero, Text } from '../components/ui'
import s from './home/home.module.css'

type Path = string

const Home = ({ recomendedProducts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const path: Path = "menu/"

  return (
    <div className={s.home}>
      <Hero />
      <section className={s.home__about}>
        <Grid classType={s['home__grid-one']}>
          <h2 className={s['home__heading-sub']}>About Us</h2>
        </Grid>
        <Grid classType={s['home__grid-two']}>
          <Text classType={s.home__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Sed felis eget velit aliquet sagittis id consectetur purus ut.
          </Text>
          <div className={s['home__img-container']}>
            <div className={s.home__img}></div>
          </div>
        </Grid>
      </section>
      <Divider classType={s.home__divider} />
      <section className={s.home__recommendations}>
        <Grid classType={s['home__grid-one']}>
          <h2 className={s['home__heading-sub']}>Our Recommendations</h2>
        </Grid>
        <Grid classType={s['home__grid-four']}>
          {recomendedProducts.map((prod: any) => (
            <ProductCard key={prod._id} product={prod} path={path} />
          ))}
        
        </Grid>
      </section>
      <Divider classType={s.home__divider} />
      <section className={s.home__contact}>
        <Grid classType={s['home__grid-one']}>
          <h2 className={s['home__heading-sub']}>Contact Us</h2>
        </Grid>
        <div className={s['home__contact-container']}>
          <ContactInfo/>
          {/* <Map /> */}
          <div className={s.home__map}>
            <iframe src={googleMapUrl} width="100%" height="100%" className={s.home__map} loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  )
}

Home.Layout = Layout

export const getStaticProps: GetStaticProps = async () => {
  //const products = await fetchUrl(`${url}/api/products`)
  dbConnect()
  const res = await productModel.find()
  //const res = await fetch(`${url}/api/products`)
  //const products = await res.json();
  const products = await JSON.parse(JSON.stringify(res))
  const menuSeven = findeOneId(products, '62065d38a80e625ec6540c3c')
  const friedMaki = findeOneId(products, '62065d38a80e625ec6540c4e')
  const noodlesWithGrilledPork = findeOneId(products, '62065d38a80e625ec6540c5b')
  const padThai = findeOneId(products, '62065d38a80e625ec6540c5f')

  return {
        props: {
            recomendedProducts: [menuSeven, friedMaki, noodlesWithGrilledPork, padThai]
        },
        revalidate: 1
    };
}


export default Home
