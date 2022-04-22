import Link from "next/link";
import { ReactNode, FC, ComponentType, HTMLAttributes } from "react";
import s from "./Card.module.css"

interface Props {
  children: ReactNode | ReactNode[]
  el?: ComponentType<HTMLAttributes<HTMLElement>>
}


const Card: FC<Props> = ({children}) => {
  return (
    <Link href="/"> 
        <a className={s.card}>
            <div className="px-6 mx-auto">
                {children}
            </div>
        </a>
    </Link>
  )
}

export default Card;