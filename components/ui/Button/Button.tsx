import { ButtonHTMLAttributes, ComponentType, DOMAttributes, FC, HTMLAttributes, MouseEventHandler, ReactNode } from "react"
//import { LoadingDots } from "@components/ui"
import s from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: ReactNode | ReactNode[]
  isLoading?: boolean
  Component?: string | ComponentType<HTMLAttributes<HTMLElement>>
  href?: string
  handleClick: MouseEventHandler 
  classType: string
}

const Button: FC<Props> = ({
  label,
  handleClick, 
  classType,
  className, 
  isLoading = false, 
  Component = "button", 
  ...rest
}) => {
	const btnClass = `button ${classType}`;

  // const rootClassName = cn(
  //   s.root,
  //   className,
  //   {
  //     [s.loading]: isLoading
  //   }
  // )

  return (
    <Component 
      className={btnClass}
      onClick={handleClick}
      type="button"
      {...rest}
      >
      {label}
      { isLoading &&
        <i className="pl-2 m-0 flex">
          {/* <LoadingDots /> */}
        </i>
       }
     </Component>
  )
}

export default Button

