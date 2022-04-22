import Divider from '../../components/ui/Divider'
import { Layout } from '../../components/common'
import s from './compliance.module.css'

const Compliance = () => {
  
  return (
    <div className={s.compliance}>
      <h1 className={s.compliance__heading}>Privacy statement</h1>
      <section className={s.compliance__section}>
          <p className={s.compliance__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className={s.compliance__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut tristique et egestas quis ipsum suspendisse. A pellentesque sit amet porttitor eget dolor morbi non arcu. 
            Dui id ornare arcu odio ut sem nulla pharetra.
          </p>
          <p className={s.compliance__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className={s.compliance__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vel risus commodo viverra maecenas accumsan.
          </p>
          <p className={s.compliance__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Vel risus commodo viverra maecenas accumsan.
          </p>
      </section>
      <section className={s.compliance__section}>
        <h2 className={s['compliance__heading-two']}>Responsible for processing&#58;</h2>
        <ul>
            <li>Sushi</li>
            <li>Karl Johans gate</li>
            <li>0000 Oslo</li>
            <li>Norway</li>
            <li>Organization no&#58; 000 111 222</li>
            <li>Epost&#58; fakeEmail@hotmail.com</li>
            <li>Phone&#58; +47 00 00 00 00</li>
        </ul>
      </section>
      <Divider classType={s.compliance__divider} />
      <section className={s.compliance__section}>
        <h2 className={s['compliance__heading-two']}>Information collected</h2>
            <p className={s.compliance__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Vel risus commodo viverra maecenas accumsan.
            </p>
            <p className={s.compliance__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Vel risus commodo viverra maecenas accumsan.
            </p>
      </section>
      <Divider classType={s.compliance__divider} />
      <section className={s.compliance__section}>
          <h2 className={s['compliance__heading-two']}>Subcontractors</h2>
          <p className={s.compliance__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Vel risus commodo viverra maecenas accumsan.
          </p>
          <ul>
              <li></li>
              <li></li>
              <li></li>
          </ul>
      </section>
      <Divider classType={s.compliance__divider} />
      <section className={s.compliance__section}>
        <h2 className={s['compliance__heading-two']}>Communication through e-mail and sms</h2>
        <p className={s.compliance__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Vitae et leo duis ut diam quam nulla porttitor. Sapien pellentesque habitant morbi tristique senectus et netus.
        </p>
        <p className={s.compliance__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Vitae et leo duis ut diam quam nulla porttitor. Sapien pellentesque habitant morbi tristique senectus et netus.
        </p>
      </section>
      <Divider classType={s.compliance__divider} />
      <section className={s.compliance__section}>
        <h2 className={s['compliance__heading-two']}>Insight and correction</h2>
        <p className={s.compliance__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Vitae et leo duis ut diam quam nulla porttitor. Sapien pellentesque habitant morbi tristique senectus et netus.
        </p>
      </section>
      <Divider classType={s.compliance__divider} />
      <section className={s.compliance__section}>
        <h2 className={s['compliance__heading-two']}>Storage and deletiong</h2>
        <p className={s.compliance__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className={s.compliance__text}>
          Lorem ipsum dolor sit amet.
        </p>
        <p className={s.compliance__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <Divider classType={s.compliance__divider} />
      <section className={s.compliance__section}>
        <h2 className={s['compliance__heading-two']}>Information on the use of cookies</h2>
        <p className={s.compliance__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Sem fringilla ut morbi tincidunt. Nibh sed pulvinar proin gravida hendrerit lectus.
        </p>
        <p className={s.compliance__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <Divider classType={s.compliance__divider} />
      <section className={s.compliance__section}>
        <h2 className={s['compliance__heading-two']}>Use of our store solutions</h2>
        <p className={s.compliance__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sed felis eget velit aliquet sagittis id consectetur purus ut.
        </p>
      </section>
      <Divider classType={s.compliance__divider} />
      <section className={s.compliance__section}>
        <h2 className={s['compliance__heading-two']}>Google Adwords</h2>
        <p className={s.compliance__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <Divider classType={s.compliance__divider} />
      <section className={s.compliance__section}>
        <h2 className={s['compliance__heading-two']}>Facebook Pixel</h2>
        <p className={s.compliance__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <Divider classType={s.compliance__divider} />
      <section className={s.compliance__section}>
        <h2 className={s['compliance__heading-two']}>Consent to the use of cookies</h2>
        <p className={s.compliance__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sed felis eget velit aliquet sagittis id consectetur purus ut.
        </p>
      </section>
    </div>
   
  )
}

Compliance.Layout = Layout

export default Compliance