//import { Product } from "../../../framework/common/types/product";
import { NextPage } from 'next'
import Image from 'next/image'
import styles from './ProductCard.module.css'
import { Product } from '@common/types/product'
import { ActiveLink, Button } from '@components/ui'

interface Props {
  product: any //Product
  path: string
}

const placeholderImage = '/product-image-placeholder.svg'

const ProductCard: NextPage<Props> = ({ product, path }) => {

  return (
    <ActiveLink
      activeClassName={''}
      href={`${path}product/[id]`}
      as={`${path}product/${product._id}`}
    >
      <a className={`${styles['card']} ${styles['card--hover']}`}>
        <div className={styles['card__img-wrapper']}>
          <Image
            className={`${styles['card__img']} ${styles['card__img--hover']}`}
            src={placeholderImage}
            alt={product.alt}
            layout='fill'
            objectFit='cover' 
          />
        </div>

        <div className={styles.card__body}>
          <h3 className={styles.card__title}>{product.title}</h3>
          <p className={styles.card__icon}>{product.icon}</p>
          <p className={styles.card__extra}>{product.extraInfo}</p>
          <span className={styles.card__price}>KR {product.price}</span>
        </div>
      </a>
    </ActiveLink>
  )
}

export default ProductCard
