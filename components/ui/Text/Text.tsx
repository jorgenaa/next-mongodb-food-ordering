import { FC, ReactNode } from 'react'
import s from './Text.module.css'

interface Text {
    classType: string
    children: ReactNode
}

const Text: FC<Text> = ({children, classType}) => {
  const headingClass = `${s.text} ${classType}`;
  return (
    <p className={headingClass}>{children}</p>
  )
}

export default Text