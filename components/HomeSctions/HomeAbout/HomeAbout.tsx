import { FC } from 'react'
import { Grid, Text } from "@components/ui"
import s from './HomeAbout.module.css'

const HomeAbout: FC = () => {
  return (
    <section className={s.homeAbout}>
        <Grid classType={s['homeAbout-one']}>
          <h2 className={s['homeAbout__heading-sub']}>Om Adamstuen Sushi</h2>
        </Grid>
        <Grid classType={s['homeAbout__grid-two']}>
          <Text classType={s.homeAbout__text}>
              Sushi Adamstuen Restaurant har det gledelig formål av å gi gjestene våres Sushi av høy kvalitet til fornuftige priser. 
              Vi lager fersk Sushi til alle anledninger og leverer god kvalitet og råvarer.
          </Text>
          <div className={s['homeAbout__img-container']}>
            <div className={s.homeAbout__img}></div>
          </div>
        </Grid>
      </section>
  )
}

export default HomeAbout
