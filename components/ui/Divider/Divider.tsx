import { ButtonHTMLAttributes, FC } from 'react';
import s from './Divider.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  classType: string
}

const Divider: FC <Props> = ({classType}) => {
  const dividerClass = `${s.divider} ${classType}`;

  return <div className={dividerClass}></div>;
};

export default Divider;
