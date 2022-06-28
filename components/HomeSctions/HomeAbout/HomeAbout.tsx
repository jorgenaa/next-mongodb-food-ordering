import { FC } from 'react'
import { Grid, Text } from "@components/ui"
import s from './HomeAbout.module.css'

const HomeAbout: FC = () => {
  return (
    <section className={s.homeAbout}>
        <Grid classType={s['homeAbout-one']}>
          <h2 className={s['homeAbout__heading-sub']}>About Us</h2>
        </Grid>
        <Grid classType={s['homeAbout__grid-two']}>
          <Text classType={s.homeAbout__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Sed felis eget velit aliquet sagittis id consectetur purus ut.
          </Text>
          <div className={s['homeAbout__img-container']}>
            <div className={s.homeAbout__img}></div>
          </div>
        </Grid>
      </section>
  )
}

export default HomeAbout
