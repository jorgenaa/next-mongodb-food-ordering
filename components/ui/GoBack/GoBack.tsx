import { NextRouter, useRouter } from 'next/router';
import * as IoIcons from 'react-icons/io5';
import Button from '../Button';
import s from './GoBack.module.css'

const GoBack = ({url}: any) => {
    const router = useRouter();
    return (
        <div className={s.goBack}>
            <Button 
                label={'Gå tilbake'} 
                handleClick={() => router.push(url)} 
                classType={`${s.btn} ${s['btn--black']} ${s['btn--rounded']} ${s['btn--hover']}`}
            >
                <span className={s.goBack__icon}>
                    <IoIcons.IoChevronBackSharp />
                </span>
            </Button>
        </div>
        // <button 
        //     className={`${s.product__btn} ${s['product__btn--black']} ${s['product__btn--rounded']} ${s['product__btn--hover']}`} 
        //     onClick={() => router.back()}>
        //     <span className={s.product__icon}>
        //         <IoIcons.IoChevronBackSharp />
        //     </span> 
        //     Gå tilbake
        // </button>
    )
}

export default GoBack