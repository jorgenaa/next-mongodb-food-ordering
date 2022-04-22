import { FC } from "react"
import s from "./Hero.module.css"
import Link from "next/link"
import { useRouter } from 'next/router'
import { Button, Container } from "@components/ui"

interface Props {
 
}

const Hero: FC<Props> = ({}) => {
  const router = useRouter()

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push("/menu")
  }

  return (
    <div className={s.hero__bg}>
      
        <div className={s.hero}>
          <h1 className={s.hero__headline}>
            Welcome 
          </h1>
          <div className="flex-1 max-w-4xl">
            <p className={s.hero__description}>
             
            </p>
            <Button 
              label="Menu &#x26; Online Ordering" 
              handleClick={handleClick}
              classType={`${s['hero__btn']} ${s['hero__btn--hover']}`} 
            />
          </div>
        </div>
     
    </div>
  )
}

export default Hero;