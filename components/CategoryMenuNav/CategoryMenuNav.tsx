import { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { ActiveLink } from "@components/ui";
import s from './CategoryMenuNav.module.css'

interface Props {
    uniqueProducts: any
    uniquePath: string
}

const CategoryMenuNav: NextPage<Props> = ({uniqueProducts, uniquePath}) => {  
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const path = "/menu/"

    const handleToggleMobileMenu = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <nav className={s.categoryMenuNav}>
            <div className={s['categoryMenuNav__toggleBtn-wrapper']} onClick={handleToggleMobileMenu}>
                <h3 className={s.categoryMenuNav__toggleBtn} >Meny</h3>
                {!isOpen ? <IoIosArrowDown style={{fontSize: "22px"}} /> : <IoIosArrowUp style={{fontSize: "22px"}} />}
            </div>
           
            <div className={isOpen ? `${s['categoryMenuNav__inner']} ${s['categoryMenuNav__inner--open']}` : `${s['categoryMenuNav__inner']} ${s['categoryMenuNav__inner--close']}` }>
                {uniqueProducts.map((prod: any, index: any) => {
                    const p = path + prod.slug
                
                    return (
                        <div key={prod.category_title}>
                            <ActiveLink activeClassName={s['CategoryMenuNav__link--active']} href={`${uniquePath}[slug]`} as={`${uniquePath}${prod.slug}`}>
                                <a className={`
                                    ${s.categoryMenuNav__link} 
                                    ${s['categoryMenuNav__link--hover']} 
                                    ${router.asPath === p ? s['categoryMenuNav__link--active'] : ""}
                                `}>
                                    {prod.category_title}
                                </a>
                            </ActiveLink>
                        </div>
                    )
                })}
            </div>
           
        </nav> 
    );
}

export default CategoryMenuNav;
