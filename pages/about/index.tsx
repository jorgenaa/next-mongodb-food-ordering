import { Text, Heading } from "../../components/ui"
import { Layout } from "../../components/common";
import s from "./about.module.css";

const About = () => {
    return (
        <div className={s.about}>
            <Heading title="About Us" classType={s.about__title} />
            <section className={s.about__section}>
                <Text classType={s.about__text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Tristique senectus et netus et. Consequat id porta nibh venenatis cras sed.
                </Text>
                <div className={s.about__img}></div>
            </section>
        </div>
    )
}

About.Layout = Layout;

export default About;
