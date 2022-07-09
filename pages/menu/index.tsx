import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { findeOneSlug, getAllProductsFromOneCategory, getUniqueSlugs, url } from "../../framework/utils/utilities"
import dbConnect from '@framework/dbConnect';
import productModel from "../../framework/models/Product"

import ProductList from "../../components/ProductList/ProductList";
import { Grid, Heading } from "../../components/ui";
import { Layout } from "../../components/common";
import CategoryMenuNav from "@components/CategoryMenuNav";
import s from "./menu.module.css"

type Path = string

const Menu = ({ uniqueProducts, filteredProducts, categoryTitle }: InferGetStaticPropsType<typeof getStaticProps>) => { 
    const path: Path = "menu/"

    return (
        <div className={s.menu}>
            <Heading title={categoryTitle.category_title} classType={s.menu__heading} />
            <Grid classType={s['menu__grid-two']}>
                <CategoryMenuNav uniquePath={path} uniqueProducts={uniqueProducts} />
                <div className={""}>
                    <ProductList products={filteredProducts} path={path} />
                </div>
            </Grid>    
        </div>
    )
}

Menu.Layout = Layout;

export const getStaticProps: GetStaticProps = async () => {
    //const products = await fetchUrl(`${url}/api/products`) //http://localhost:3000/api/products
    // const res = await fetch(`${url}/api/products`)
    // const products = await res.json();
    dbConnect()
    const res = await productModel.find()
    const products = await JSON.parse(JSON.stringify(res))
    
    const key = 'slug';
    const slugs = getUniqueSlugs(products, key);
    
    const staticSlugValue = "starters";
    const uniqueSlug = findeOneSlug(products, staticSlugValue);

    const filterProducts = getAllProductsFromOneCategory(products, staticSlugValue);
   
    return {
          props: {
              uniqueProducts: slugs,
              filteredProducts: filterProducts,
              categoryTitle: uniqueSlug,
          },
          revalidate: 1
      };
  }

export default Menu;
