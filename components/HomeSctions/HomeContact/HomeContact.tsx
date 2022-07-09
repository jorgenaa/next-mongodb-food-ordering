import { FC } from 'react'
import { ContactInfo, Grid } from '@components/ui'
import { googleMapUrl } from '@framework/utilities';
import s from './HomeContact.module.css'

const HomeContact: FC = () => {
  return (
    <section className={s.homeContact}>
      <Grid classType={s['homeContact__grid-one']}>
        <h2 className={s['homeContact__heading-sub']}>Contact Us</h2>
      </Grid>
      <div className={s['homeContact__container']}>
        <ContactInfo />
        {/* <Map /> */}
        <div className={s.homeContact__map}>
          <iframe
            src={googleMapUrl}
            width='100%'
            height='100%'
            className={s.homeContact__map}
            loading='lazy'
          />
        </div>
      </div>
    </section>
  )
}

export default HomeContact
