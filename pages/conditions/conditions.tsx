import Divider from '../../components/ui/Divider'
import { Layout } from '../../components/common'
import s from './conditions.module.css'

const Condition = () => {
  
  return (
    <div className={s.conditions}>
      <h1 className={s.conditions__heading}>Conditions</h1>
      <section className={s.conditions__section}>
        <h2 className={s['conditions__heading-two']}>Payments</h2>
        <p className={s.conditions__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </section>
      <Divider classType={s.conditions__divider} />
      <section className={s.conditions__section}>
        <h2 className={s['conditions__heading-two']}>Prices og taxes</h2>
          <p className={s.conditions__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </section>
      <Divider classType={s.conditions__divider} />
      <section className={s.conditions__section}>
          <h2 className={s['conditions__heading-two']}>Delivery</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Vitae sapien pellentesque habitant morbi tristique senectus.
          </p>
      </section>
      <Divider classType={s.conditions__divider} />
      <section className={s.conditions__section}>
        <h2 className={s['conditions__heading-two']}>Payment terms</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <Divider classType={s.conditions__divider} />
      <section className={s.conditions__section}>
        <h2 className={s['conditions__heading-two']}>Personopplysninger</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis.
        </p>
      </section>
      <Divider classType={s.conditions__divider} />
      <section className={s.conditions__section}>
        <h2 className={s['conditions__heading-two']}>Card information</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut eu sem integer vitae justo eget.
        </p>
      </section>
      <Divider classType={s.conditions__divider} />
      <section className={s.conditions__section}>
        <h2 className={s['conditions__heading-two']}>Cancellation</h2>
        <ul>
         <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
         <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
         <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </section>
      <Divider classType={s.conditions__divider} />
      <section className={s.conditions__section}>
        <h2 className={s['conditions__heading-two']}>Complaint</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Venenatis lectus magna fringilla urna. Proin fermentum leo vel orci.
        </p>
      </section>
      <Divider classType={s.conditions__divider} />
      <section className={s.conditions__section}>
        <h2 className={s['conditions__heading-two']}>Right of withdrawal</h2>
        <p>
          Contact us by phone +47 22 00 00 00 or by e-mail: sushi@hotmail.com for questions about the right of withdrawal.
        </p>
      </section>
      <Divider classType={s.conditions__divider} />
      <section className={s.conditions__section}>
        <h2 className={s['conditions__heading-two']}>Uncollected goods</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <Divider classType={s.conditions__divider} />
      <section className={s.conditions__section}>
        <h2 className={s['conditions__heading-two']}>Conflict resolution</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Sed viverra ipsum nunc aliquet. Risus viverra adipiscing at in tellus. Facilisis leo vel fringilla est ullamcorper.
        </p>
      </section>
    </div>
  )
}

Condition.Layout = Layout

export default Condition
