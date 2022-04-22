import { FC } from 'react'
import s from './Heading.module.css'

interface Heading {
    title: string
    classType: string
}

const Heading: FC<Heading> = ({title, classType}) => {
  const headingClass = `${s.heading} ${classType}`;
  return (
    <h1 className={headingClass}>{title}</h1>
  )
}

export default Heading