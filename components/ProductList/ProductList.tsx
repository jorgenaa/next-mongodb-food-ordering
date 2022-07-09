
import { NextPage } from "next";
import s from "./ProductList.module.css";
import ProductCard from "../Product/ProductCard/ProductCard";

interface Props {
  products: any 
  path: string
}

const ProductList: NextPage<Props> = ({ products, path }) => {
  return (
      <>
        <div className={s['productlist']}>
          {products.map((product: any) => (
              <ProductCard key={product._id} product={product} path={path} />
          ))}
        </div>
      </>
  );
};

export default ProductList;