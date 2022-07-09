import { FC } from 'react'
import ProductCard from "@components/Product/ProductCard/ProductCard"
import { Grid } from "@components/ui"
import s from './HomeRecommendations.module.css'

interface props {
    path: string
    recomendedProducts: any
}

const HomeRecommendations: FC<props> = ({recomendedProducts, path}) => {
  return (
    <section className={s.homeRecommendations}>
      <Grid classType={s['homeRecommendations__grid-one']}>
        <h2 className={s['homeRecommendations__heading-sub']}>Our Recommendations</h2>
      </Grid>
      <Grid classType={s['homeRecommendations__grid-four']}>
        {recomendedProducts.map((prod: any) => (
          <ProductCard key={prod._id} product={prod} path={path} />
        ))}
      </Grid>
    </section>
  )
}

export default HomeRecommendations
