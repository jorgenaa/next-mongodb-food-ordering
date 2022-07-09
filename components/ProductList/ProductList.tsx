
import { NextPage } from "next";
import s from "./ProductList.module.css";
import ProductCard from "../Product/ProductCard/ProductCard";

interface Props {
  products: any 
  path: string
  size: string
}

const ProductList: NextPage<Props> = ({ products, path, size }) => {
  return (
      <>
        <div className={s['productlist']}>
          {products.map((product: any) => (
              <ProductCard key={product._id} product={product} path={path} size={size} />
          ))}
        </div>
      </>
  );
};

export default ProductList;