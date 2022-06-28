import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { findeOneId, googleMapUrl } from '@framework/utilities';
import dbConnect from '@framework/dbConnect';
import productModel from "../framework/models/Product"

import Divider from '../components/ui/Divider'
import { Layout } from '../components/common'
import * as HomeSection from '../components/HomeSctions'
import { Hero} from '../components/ui'
import s from './home/home.module.css'

type Path = string

const Home = ({ recomendedProducts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const path: Path = "menu/"

  return (
    <div className={s.home}>
     <Hero />
      <HomeSection.HomeAbout />
      <Divider classType={s.home__divider} />
      <HomeSection.HomeRecommendations
        path={path}
        recomendedProducts={recomendedProducts}
      />
      <Divider classType={s.home__divider} />
      <HomeSection.HomeConctact />
    </div>
  )
}

Home.Layout = Layout

export const getStaticProps: GetStaticProps = async () => {
  
  dbConnect()
  const res = await productModel.find()
 
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
