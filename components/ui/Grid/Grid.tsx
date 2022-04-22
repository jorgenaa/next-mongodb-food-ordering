import {FC, ReactNode} from 'react'
import styles from "./Grid.module.css"

interface Props {
    classType: string;
    children: ReactNode
}

const Grid: FC<Props> = ({children, classType}) => {
    const gridClass = `${classType}`;
    return (
        <div className={`${styles.root} ${gridClass}`}>
            {children}
        </div>
    )
}

export default Grid;